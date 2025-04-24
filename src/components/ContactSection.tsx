import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Send, Clock, Calendar, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
// Direct Supabase API is used instead of the client
import { toast } from "../hooks/use-toast";
import { Button } from "./ui/button";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [interests, setInterests] = useState({
    buddyTraining: false,
    personalTraining: false,
    batchTraining: false,
    nutritionGuidance: false,
    yoga: false,
    aerobics: false
  });

  // Function to handle program selection
  const handleProgramSelection = (program: string) => {
    console.log('Handling program selection:', program);
    // Convert program name to interest key
    const programToInterestMap: Record<string, keyof typeof interests> = {
      'Personal Training': 'personalTraining',
      'Buddy Training': 'buddyTraining',
      'Batch Training': 'batchTraining',  // Match the exact title from CTASection
      'Nutrition Guidance': 'nutritionGuidance',
      'Yoga Classes': 'yoga',
      'Aerobics': 'aerobics'
    };

    const interestKey = programToInterestMap[program];
    console.log('Interest key:', interestKey);
    if (interestKey) {
      console.log('Setting interest:', interestKey, 'to true');
      setInterests(prev => {
        const newInterests = {
          ...prev,
          [interestKey]: true
        };
        console.log('New interests:', newInterests);
        return newInterests;
      });
    }
  };

  // Check for selected program from localStorage and listen for custom events
  // Load reCAPTCHA script
  useEffect(() => {
    // Add reCAPTCHA script if it doesn't exist
    if (!document.querySelector('script[src*="recaptcha"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        document.head.removeChild(script);
      };
    }
  }, []);

  // Handle program selection event
  useEffect(() => {
    // Check localStorage for selected program
    const selectedProgram = localStorage.getItem('selectedProgram');
    console.log('Selected program from localStorage:', selectedProgram);
    if (selectedProgram) {
      handleProgramSelection(selectedProgram);
      // Clear localStorage after using it
      localStorage.removeItem('selectedProgram');
    }

    // Listen for custom events
    const handleEvent = (event: CustomEvent<{program: string}>) => {
      console.log('Received custom event with program:', event.detail.program);
      handleProgramSelection(event.detail.program);
    };

    // Add event listener
    document.addEventListener('programSelected', handleEvent as EventListener);

    // Clean up
    return () => {
      document.removeEventListener('programSelected', handleEvent as EventListener);
    };
  }, []);

  const handleInterestChange = (interest: string) => {
    setInterests(prev => ({
      ...prev,
      [interest]: !prev[interest as keyof typeof prev]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if at least one interest is selected
    const hasSelectedInterest = Object.values(interests).some(value => value === true);
    if (!hasSelectedInterest) {
      toast({
        title: "Please select at least one interest",
        description: "Let us know what you're interested in.",
        variant: "destructive"
      });
      return;
    }

    // Verify reCAPTCHA
    const recaptchaValue = (window as any).grecaptcha?.getResponse();
    if (!recaptchaValue) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "Verify that you are not a robot.",
        variant: "destructive"
      });
      return;
    }

    setRecaptchaToken(recaptchaValue);

    setIsSubmitting(true);

    try {
      // Get selected interests as a string
      const selectedInterests = Object.entries(interests)
        .filter(([_, isSelected]) => isSelected)
        .map(([interest, _]) => {
          // Convert camelCase to readable format
          return interest
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
        })
        .join(', ');

      // Send form data to Supabase using direct fetch API
      const SUPABASE_URL = 'https://xqmujsdspymsacjzhoyh.supabase.co';
      const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbXVqc2RzcHltc2Fjanpob3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNTQ5NDUsImV4cCI6MjA1OTkzMDk0NX0.IspVcIDlUu5UDw1AnYhA5rV1erdQYBUa-irAO4wvtMM';

      const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          interests: selectedInterests
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Submission failed: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      // Show success toast
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setSubmitted(true);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Reset interests checkboxes
      setInterests({
        buddyTraining: false,
        personalTraining: false,
        batchTraining: false,
        nutritionGuidance: false,
        yoga: false,
        aerobics: false
      });

      // Reset reCAPTCHA
      if ((window as any).grecaptcha) {
        (window as any).grecaptcha.reset();
      }

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);

      // More detailed error message
      let errorMessage = "Please try again later.";
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
        console.error("Detailed error:", error.message);
      }

      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="font-display mb-4 text-3xl font-extrabold text-foreground md:text-5xl opacity-0 animate-fade-in animate-on-scroll">
            <span className="text-primary drop-shadow-md relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
            </span> Us
          </h2>
          <p className="text-foreground/80 font-medium text-base opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Get in touch with our team to start your fitness journey
          </p>
        </div>

        <div className="opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          {/* Main contact container - more compact design */}
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 relative">
            <div className="md:grid md:grid-cols-3 items-stretch">
              {/* Left side - Contact form */}
              <div className="md:col-span-2 p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Send className="h-5 w-5 text-primary mr-2" />
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6 flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : null}

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Interest selection - more compact */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      I'm Interested In: <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {Object.entries(interests).map(([key, value]) => {
                        // Convert camelCase to readable format
                        const label = key
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, str => str.toUpperCase());

                        return (
                          <div
                            key={key}
                            className={`flex items-center p-2 rounded-md border transition-all duration-200 cursor-pointer ${value ? 'border-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 hover:border-primary/30'}`}
                            onClick={() => handleInterestChange(key)}
                          >
                            <input
                              type="checkbox"
                              id={key}
                              checked={value}
                              onChange={() => handleInterestChange(key)}
                              className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={key} className="text-foreground text-sm cursor-pointer">{label}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact details - more compact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-10"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-10"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full"
                      rows={3}
                      placeholder="I'd like to inquire about..."
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <div ref={recaptchaRef} className="g-recaptcha" data-sitekey="6LfWpRsrAAAAAGqIeDGZl10RELxMdkq0SRGDtncc"></div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-primary/90 py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right side - Contact info - more compact */}
              <div className="md:col-span-1 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  Get in Touch
                </h3>

                <div className="space-y-5 flex-grow text-sm">
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Visit Us</h4>
                      <p className="text-foreground/80">
                        Plot no 41, no 4, Alankar Society Rd,<br/>
                        Karvenagar, Pune, Maharashtra 411052
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                      <p className="text-foreground/80">
                        info@fitkraft.studio
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                      <p className="text-foreground/80">
                        +91 9699088367
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Hours</h4>
                      <p className="text-foreground/80">
                        Mon-Fri: 6-9 AM, 6-8 PM
                      </p>
                    </div>
                  </div>

                  {/* Social media links moved below hours */}
                  <div className="flex items-center mt-2">
                    <div className="mr-3 mt-0.5 h-8 w-8 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="https://www.instagram.com/fitkraft.shubhangi/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        Instagram
                      </a>
                      <span className="text-gray-300">|</span>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-foreground hover:text-primary transition-colors"
                        aria-label="Facebook"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map below Get in Touch with more space */}
                <div className="mt-6">
                  <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="h-48">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8867780076636!2d73.81324907497906!3d18.48651168259752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8c1c7562f5%3A0x59f9b10f0b2a54e7!2sPlot%20No.%2041%2C%20Alankar%20Society%20Rd%2C%20Alankar%20Society%2C%20Ganesh%20Nagar%2C%20Karvenagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1718102066619!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FitKraft Studio Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactSection;

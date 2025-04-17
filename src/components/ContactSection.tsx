import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Send, Clock, Calendar, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { supabase } from "../integrations/supabase/client";
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

      // Send form data to Supabase with reCAPTCHA token
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name,
            email,
            phone,
            message,
            interests: selectedInterests,
            recaptcha_token: recaptchaValue // Store token for verification
          }
        ]);

      if (error) {
        throw error;
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
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[60px] animate-pulse-slow"></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] -right-20 w-[100px] h-[400px] bg-primary/10 rotate-[45deg] transform-gpu"></div>
        <div className="absolute bottom-[20%] -left-20 w-[150px] h-[500px] bg-primary/10 rotate-[30deg] transform-gpu"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display mb-4 text-3xl font-extrabold text-foreground md:text-5xl opacity-0 animate-fade-in animate-on-scroll">
            <span className="text-primary drop-shadow-md relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
            </span> Us
          </h2>
          <p className="text-foreground/80 font-medium text-lg opacity-0 animate-fade-in animate-delay-100 animate-on-scroll">
            Get in touch with our team to start your fitness journey
          </p>
        </div>

        <div className="mb-16 opacity-0 animate-fade-in animate-delay-200 animate-on-scroll">
          {/* Main contact container */}
          <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 relative">
            <div className="md:grid md:grid-cols-5 items-stretch">
              {/* Left side - Contact form */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="text-2xl font-extrabold text-foreground mb-8 flex items-center">
                  <Send className="h-6 w-6 text-primary mr-3" />
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-5 rounded-xl mb-8 flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-lg">Message sent successfully!</p>
                      <p className="text-green-700">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : null}

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Interest selection */}
                  <div>
                    <label className="block text-base font-medium text-foreground mb-3">
                      I'm Interested In: <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(interests).map(([key, value]) => {
                        // Convert camelCase to readable format
                        const label = key
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, str => str.toUpperCase());

                        return (
                          <div
                            key={key}
                            className={`flex items-center p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${value ? 'border-primary bg-primary/5' : 'border-primary/20 hover:border-primary/40'}`}
                            onClick={() => handleInterestChange(key)}
                          >
                            <input
                              type="checkbox"
                              id={key}
                              checked={value}
                              onChange={() => handleInterestChange(key)}
                              className="mr-3 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={key} className="text-foreground font-medium cursor-pointer">{label}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full"
                      rows={4}
                      placeholder="I'd like to inquire about..."
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center mb-4">
                    <div ref={recaptchaRef} className="g-recaptcha" data-sitekey="6LfWpRsrAAAAAGqIeDGZl10RELxMdkq0SRGDtncc"></div>
                  </div>



                  <div>
                    <Button
                      type="submit"
                      className="w-full btn-primary py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right side - Contact info */}
              <div className="md:col-span-2 bg-primary/5 p-8 md:p-10 flex flex-col">
                <h3 className="text-2xl font-extrabold text-foreground mb-8 flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </h3>

                <div className="space-y-8 flex-grow">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Visit Us</h4>
                      <p className="text-foreground/80 font-medium">
                        Plot no 41, no 4, gaurav, Alankar Society Rd,<br/>
                        opp. shailesh Sabhagruha, Alankar Society,<br/>
                        Ganesh Nagar, Karvenagar, Pune, Maharashtra 411052
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1 h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Email Us</h4>
                      <p className="text-foreground/80 font-medium">
                        info@fitkraft.studio<br/>
                        support@fitkraft.studio
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1 h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Call Us</h4>
                      <p className="text-foreground/80 font-medium">
                        +91 9699088367
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1 h-12 w-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Opening Hours</h4>
                      <p className="text-foreground/80 font-medium">
                        Monday to Friday: 6:00 AM - 9:00 AM, 6:00 PM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social media links */}
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <h4 className="text-lg font-bold text-foreground mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/fitkraft.shubhangi/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="opacity-0 animate-fade-in animate-delay-300 animate-on-scroll">
          <div className="glass-panel rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 relative">
            <div className="h-64 md:h-96">
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
    </section>
  );
};

export default ContactSection;

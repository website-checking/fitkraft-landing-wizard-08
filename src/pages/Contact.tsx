
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Send, Clock } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { supabase } from "../integrations/supabase/client";
import { toast } from "../hooks/use-toast";
import { Button } from "../components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = "Contact Us - Fitkraft Studio";

    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { name, email, phone, message }
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl mb-8">
              <div className="flex items-center justify-center mb-4 opacity-0 animate-fade-in">
                <div className="w-12 h-[2px] bg-primary mr-3"></div>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">REACH OUT</p>
              </div>
              <h1 className="font-display mb-4 text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-none text-center opacity-0 animate-fade-in">
                CONTACT US
                <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
              </h1>
              <p className="text-foreground/80 font-bold uppercase tracking-wider text-sm text-center opacity-0 animate-fade-in animate-delay-100">
                Get in touch with our team to start your fitness journey
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start mb-8">
              <div className="opacity-0 animate-fade-in animate-delay-200 md:col-span-4">
                <h2 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight mb-3">REACH OUT TO US</h2>
                <div className="w-10 h-1 bg-primary mb-4"></div>

                <div className="overflow-hidden h-64 md:h-[300px] border border-gray-200 mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.325732280321!2d73.80646694614!3d18.4911897406789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb0e756d06d%3A0xbea4ce1dba221512!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649835284523!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FitKraft Studio Location"
                  ></iframe>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-900 rounded-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">VISIT US</h3>
                      <p className="text-foreground/70 text-sm">
                        Plot 41, Karvenagar<br/>
                        Pune, Maharashtra<br/>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-900 rounded-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">INSTAGRAM</h3>
                      <p className="text-foreground/70 text-sm">
                        <a href="https://www.instagram.com/fitkraft.shubhangi/" className="hover:text-primary">@fitkraft.shubhangi</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-900 rounded-sm">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">CALL US</h3>
                      <p className="text-foreground/70 text-sm">
                        +91 9699088367
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-900 rounded-sm">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">OPENING HOURS</h3>
                      <p className="text-foreground/70 text-sm">
                        Monday to Friday: 6:00 AM - 10:00 AM and 7:00 PM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 opacity-0 animate-fade-in animate-delay-300 border-t border-gray-200 shadow-sm md:col-span-4">
                <h2 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight mb-3">SEND US A MESSAGE</h2>
                <div className="w-10 h-1 bg-primary mb-4"></div>

                {submitted ? (
                  <div className="bg-gray-100 border-l-4 border-gray-300 text-foreground px-4 py-3 mb-6">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                      YOUR NAME *
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

                  <div className="mb-3">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                      EMAIL ADDRESS *
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

                  <div className="mb-3">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                      PHONE NUMBER *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                      YOUR MESSAGE *
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full"
                      rows={4}
                      placeholder="I'd like to inquire about..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>

              <div className="opacity-0 animate-fade-in animate-delay-400 md:col-span-4 border-t border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight mb-3">VISIT US TODAY</h2>
                <div className="w-10 h-1 bg-primary mb-4"></div>
                <p className="text-foreground/70 mb-6 text-sm">
                  We invite you to come and experience our studio in person. Drop by for a visit, meet our trainers,
                  and see why FitKraft Studio is the preferred fitness destination in Karve Nagar, Pune.
                </p>
                <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="uppercase tracking-wider font-bold bg-gray-900 text-white hover:bg-gray-800 w-full">
                  BOOK A FREE TRIAL CLASS
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

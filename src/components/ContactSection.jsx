import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation, fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Connection Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-6" variants={fadeUpVariants}>
              <h2 className="text-2xl md:text-4xl font-medium">
                Let's Make It Happen
              </h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground">
                Say Hello
              </h3>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeUpVariants}>
              <p className="text-muted-foreground leading-relaxed">
                Ready to bring your ideas to life? Whether you have a project in mind, 
                need consultation, or just want to connect, I'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Local time: {currentTime.toLocaleTimeString('en-US', {
                      timeZone: 'Asia/Kolkata',
                      hour12: true,
                      hour: 'numeric',
                      minute: '2-digit',
                      second: '2-digit'
                    })}, IST
                  </span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                  <a 
                    href="mailto:mekalavamshiyadav46@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    mekalavamshiyadav46@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-4" variants={fadeUpVariants}>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Socials</p>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/mekalavamshiyadav/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/VAMSHIYADAV46" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.instagram.com/vammshi_46/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-foreground transition-colors resize-none"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-medium">
                Let's Make It Happen
              </h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground">
                Say Hello
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Ready to bring your ideas to life? Whether you have a project in mind, 
                need consultation, or just want to connect, I'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Local time: {currentTime}, IST
                  </span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                  <a 
                    href="mailto:zuned@example.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    zuned@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Socials</p>
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/in/zunedaalim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/zunedaalim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://instagram.com/zuned_aalim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
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

              <Button type="submit" className="btn-primary w-full group">
                Send Message
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
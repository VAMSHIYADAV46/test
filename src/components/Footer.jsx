import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Menu Links */}
          <div className="space-y-6">
            <h3 className="text-sm text-muted-foreground uppercase tracking-wide">Menu</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToTop()}
                className="nav-link block text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="nav-link block text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="nav-link block text-left"
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link block text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link block text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-sm text-muted-foreground uppercase tracking-wide">Socials</h3>
            <nav className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/mekalavamshiyadav/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link block"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/vammshi_46/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link block"
              >
                Instagram
              </a>
              <a 
                href="https://github.com/VAMSHIYADAV46" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link block"
              >
                GitHub
              </a>
            </nav>
          </div>

          {/* Local Time & Back to Top */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Local time: {currentTime.toLocaleTimeString('en-US', {
                  timeZone: 'Asia/Kolkata',
                  hour12: true,
                  hour: 'numeric',
                  minute: '2-digit',
                  second: '2-digit'
                })}, IST
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-6 h-6 border border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} vamshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
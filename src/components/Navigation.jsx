import { useState, useEffect } from 'react';
import ThemeToggle from './ui/ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Full Stack Developer & Designer</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="nav-link text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="nav-link text-sm font-medium"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-sm font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link text-sm font-medium"
            >
              Contact
            </button>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-foreground hover:text-muted transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
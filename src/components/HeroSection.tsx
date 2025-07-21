import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-hero animate-fade-up">
                ZUNED AALIM
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Open to job opportunities worldwide. Passionate about building polished, 
                intuitive, and thoughtful digital experiences that leave a mark.
              </p>

              {/* CTA Button */}
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  onClick={scrollToContact}
                  className="btn-primary group"
                >
                  CONTACT
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:rotate-45 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Availability Status */}
            <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-6 right-6 bg-foreground text-background px-6 py-2 rounded-full">
              <span className="text-2xl font-bold">JUN'25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
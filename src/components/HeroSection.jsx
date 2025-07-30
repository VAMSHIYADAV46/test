import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';

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
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.div className="space-y-2" variants={fadeUpVariants}>
              <h1 className="text-hero">
                VAMSHI
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div className="space-y-6" variants={fadeUpVariants}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Open to job opportunities worldwide. Passionate about building polished, 
                intuitive, and thoughtful digital experiences that leave a mark.
              </p>

              {/* CTA Button */}
              <motion.div variants={fadeUpVariants}>
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
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={heroImage}
                alt="Professional workspace"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>

            {/* Availability Status */}
            <motion.div 
              className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </motion.div>

            {/* Date Badge */}
            <motion.div 
              className="absolute bottom-6 right-6 bg-foreground text-background px-6 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="text-2xl font-bold">
                  {new Date().toLocaleString("en-US", { month: "short" }).toUpperCase()}'{new Date().getFullYear().toString().slice(-2)}
              </span>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
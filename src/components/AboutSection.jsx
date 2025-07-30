import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-image.jpg';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content - Image */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="About me"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-4" variants={fadeUpVariants}>
              <p className="text-muted-foreground text-sm tracking-wide uppercase">(About Me)</p>
              <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                I'm a software engineer driven by a passion for turning ideas into clean, 
                intuitive digital experiences.
              </h2>
            </motion.div>

            <motion.div className="space-y-6 text-muted-foreground leading-relaxed" variants={fadeUpVariants}>
              <p>
                I am a passionate Software Engineer with a knack for building full-stack web applications 
                using modern technologies like Next.js and TailwindCSS. My journey into tech began with 
                a curiosity for solving real-world problems through innovative solutions, which evolved 
                into a love for crafting user-centric digital experiences.
              </p>
              
              <p>
                Beyond coding, I thrive in collaborative environments and enjoy tackling challenging 
                problems with creative solutions. I aim to contribute to impactful projects that make 
                a difference in users' lives.
              </p>
            </motion.div>

            {/* Experience Highlights */}
            <motion.div className="grid grid-cols-2 gap-8 mt-12" variants={fadeUpVariants}>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">0+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">3+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</p>
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div className="mt-8" variants={fadeUpVariants}>
              <a 
                href="/Vamshi's Resume.pdf" 
                download="Mekala_Vamshi_Yadav_Resume.pdf"
                className="btn-secondary group inline-flex items-center"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
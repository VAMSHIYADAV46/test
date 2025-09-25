import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [currentProject, setCurrentProject] = useState(0);
  const autoScrollRef = useRef(null);
  const interactionTimeoutRef = useRef(null);
  const hasStartedAutoScroll = useRef(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce solution built with Next.js and Stripe integration.',
      technologies: ['Next.js', 'TailwindCSS', 'Stripe', 'Prisma'],
      category: 'Full-Stack Development',
      videoSrc: '/videos/aalim portfolio.mp4',
    },
    {
      title: 'Portfolio Website',
      description: 'A minimalist portfolio showcasing creative work with smooth animations and interactions.',
      technologies: ['React', 'GSAP', 'Three.js', 'Framer Motion'],
      category: 'Frontend Development',
      videoSrc: '/videos/Final Draft.mp4',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management platform with real-time updates and team features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'Full-Stack Development',
      videoSrc: '/videos/Mahaparanlika project.mp4',
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL'],
      category: 'Data Visualization',
      videoSrc: '/videos/sportify clone.mp4',
    },
    {
      title: 'Mobile App UI',
      description: 'A sleek mobile application interface with modern design patterns and smooth UX.',
      technologies: ['React Native', 'Figma', 'Lottie', 'Firebase'],
      category: 'Mobile Development',
      videoSrc: '/videos/mobileui.mp4',
    }
  ];

  const totalProjects = projects.length;

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % totalProjects);
  };

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 10000); // Resume after 10s
  };

  const startAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % totalProjects);
    }, 5000);
  };

  // Start auto-scroll only when section comes into view
  useEffect(() => {
    if (isInView && !hasStartedAutoScroll.current) {
      hasStartedAutoScroll.current = true;
      startAutoScroll();
    } else if (!isInView && hasStartedAutoScroll.current) {
      // Pause auto-scroll when section goes out of view
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    } else if (isInView && hasStartedAutoScroll.current) {
      // Resume auto-scroll when section comes back into view
      startAutoScroll();
    }
  }, [isInView]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const handleManualNav = (index) => {
    pauseAutoScroll();
    setCurrentProject(index);
  };

  return (
    <section id="works" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div className="mb-16 md:mb-24" variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="flex items-baseline space-x-4 mb-6" variants={fadeUpVariants}>
            <h2 className="text-large">Selected Works</h2>
          </motion.div>
          <motion.p className="text-muted-foreground text-sm tracking-wide uppercase mb-8" variants={fadeUpVariants}>
            (Projects)
          </motion.p>
          <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl" variants={fadeUpVariants}>
            Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined.
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center justify-between mb-12" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="text-6xl md:text-8xl font-light text-muted-foreground/30">
            {String(currentProject + 1).padStart(2, '0')}
          </div>
          <div className="flex space-x-2 items-center">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(index)}
                className={`w-8 h-1 transition-all duration-300 ${
                  currentProject === index ? 'bg-foreground' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
            <div className="ml-4 w-2.5 h-2.5 bg-foreground rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Carousel Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {projects[currentProject].category}
                </p>
                <h3 className="text-2xl md:text-4xl font-medium">
                  {projects[currentProject].title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {projects[currentProject].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-card border border-border rounded-full text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <button className="btn-primary">
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                <button className="btn-secondary">Live Demo</button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Visual (Image or Video) */}
          <motion.div
            className="bg-muted-foreground/10 rounded-lg h-[400px] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {projects[currentProject].videoSrc ? (
              <video
                src={projects[currentProject].videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">Project Preview</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-16 space-x-8">
          <button
            onClick={() => handleManualNav((currentProject - 1 + totalProjects) % totalProjects)}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleManualNav((currentProject + 1) % totalProjects)}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { useState } from 'react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce solution built with Next.js and Stripe integration.',
      technologies: ['Next.js', 'TailwindCSS', 'Stripe', 'Prisma'],
      category: 'Full-Stack Development'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A minimalist portfolio showcasing creative work with smooth animations and interactions.',
      technologies: ['React', 'GSAP', 'Three.js', 'Framer Motion'],
      category: 'Frontend Development'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management platform with real-time updates and team features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'Full-Stack Development'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with interactive charts and data visualization.',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL'],
      category: 'Data Visualization'
    },
    {
      id: 5,
      title: 'Mobile App UI',
      description: 'A sleek mobile application interface with modern design patterns and smooth UX.',
      technologies: ['React Native', 'Figma', 'Lottie', 'Firebase'],
      category: 'Mobile Development'
    }
  ];

  return (
    <section id="works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-baseline space-x-4 mb-6">
            <h2 className="text-large">Selected Works</h2>
            <span className="text-foreground/50">/</span>
          </div>
          <p className="text-muted-foreground text-sm tracking-wide uppercase mb-8">(Projects)</p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Thoughtfully crafted digital experiences that blend utility and aesthetics into 
            something functional, memorable, and refined.
          </p>
        </div>

        {/* Project Counter */}
        <div className="flex items-center justify-between mb-12">
          <div className="text-6xl md:text-8xl font-light text-muted-foreground/30">
            {String(currentProject + 1).padStart(2, '0')}
          </div>
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-8 h-1 transition-all duration-300 ${
                  currentProject === index ? 'bg-foreground' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[400px]">
          <div className="space-y-8 animate-fade-up">
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
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-card border border-border rounded-full text-foreground/80"
                >
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
              <button className="btn-secondary">
                Live Demo
              </button>
            </div>
          </div>

          {/* Project Visual Placeholder */}
          <div className="bg-muted-foreground/10 rounded-lg h-[400px] flex items-center justify-center animate-fade-up">
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
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-16 space-x-8">
          <button
            onClick={() => setCurrentProject(prev => prev > 0 ? prev - 1 : projects.length - 1)}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentProject(prev => prev < projects.length - 1 ? prev + 1 : 0)}
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
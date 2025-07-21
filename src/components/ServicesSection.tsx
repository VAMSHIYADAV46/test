import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const services = [
    {
      number: '01',
      title: 'Full-Stack Development',
      description: 'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      skills: ['React, Node.js, Express.js', 'REST APIs, Firebase, Docker', 'Git, GitHub, Postman']
    },
    {
      number: '02',
      title: 'UI/UX & Frontend',
      description: 'Design is more than looks — it\'s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.',
      skills: ['NextJs, TailwindCSS, GSAP', 'Figma to Code', 'HTML, CSS, JavaScript']
    },
    {
      number: '03',
      title: 'Optimization',
      description: 'Beyond handling data, I\'m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.',
      skills: ['Data Structures & Algorithms', 'DBMS, OOP, OS Fundamentals', 'Data Pipelines, ETL, and Scalability']
    }
  ];

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex items-baseline space-x-4 mb-6" variants={fadeUpVariants}>
            <h2 className="text-large">What I Do</h2>
            <span className="text-foreground/50">/</span>
          </motion.div>
          <motion.p className="text-muted-foreground text-sm tracking-wide uppercase mb-8" variants={fadeUpVariants}>
            (Services)
          </motion.p>
          <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl" variants={fadeUpVariants}>
            I specialize in building full-stack web applications that are fast, reliable, and user-friendly. 
            With a solid foundation in both frontend and backend technologies, I help bring ideas to life 
            whether it's for a business, a startup, or a product team.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid-services"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.number}
              className="group space-y-6"
              variants={fadeUpVariants}
              custom={index}
            >
              {/* Service Number */}
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground text-sm">({service.number})</span>
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-medium group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Skills List */}
              <div className="space-y-2">
                {service.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start space-x-2">
                    <span className="text-xs text-muted-foreground mt-1">
                      {String(skillIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

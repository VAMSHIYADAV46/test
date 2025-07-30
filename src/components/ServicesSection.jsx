import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer, scaleInVariants } from '@/hooks/useScrollAnimation';

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
    <section id="services" className="section-padding bg-card relative" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-amber-100 opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="flex items-baseline space-x-4 mb-6" variants={fadeUpVariants}>
            <h2 className="text-large">What I Do</h2>
            {/* <span className="text-foreground/50">/</span> */}
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
          {services.map((service, index) => {
            // Define border and shadow colors for each card
            const accentColors = [
              'border-blue-200 hover:shadow-blue-200/50 hover:border-blue-300',
              'border-amber-200 hover:shadow-amber-200/50 hover:border-amber-300',
              'border-emerald-200 hover:shadow-emerald-200/50 hover:border-emerald-300'
            ];
            
            // Define accent colors for the number badge
            const badgeColors = [
              'bg-blue-100 text-blue-700',
              'bg-amber-100 text-amber-700',
              'bg-emerald-100 text-emerald-700'
            ];
            
            return (
              <motion.div 
                key={service.number}
                className={`group space-y-6 p-8 rounded-xl border bg-[#ffffff80] backdrop-blur-sm ${accentColors[index]} transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden`}
                variants={fadeUpVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background decoration */}
                <motion.div 
                  className="absolute -right-12 -top-12 w-40 h-40 rounded-full opacity-10 bg-foreground"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                />
                {/* Service Number */}
                <div className="flex items-center space-x-4 relative z-10">
                  <motion.span 
                    className={`text-sm font-medium ${badgeColors[index]} px-3 py-1 rounded-full inline-block shadow-sm`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    ({service.number})
                  </motion.span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-medium text-primary group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground dark:text-foreground/80 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2 mt-4 relative z-10">
                  {service.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-300" 
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (skillIndex * 0.05), duration: 0.5 }}
                    >
                      <span className="text-xs bg-background/70 text-foreground/70 dark:bg-background/40 dark:text-foreground/90 px-2 py-0.5 rounded-full">
                        {String(skillIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-foreground/80 dark:text-foreground/90">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
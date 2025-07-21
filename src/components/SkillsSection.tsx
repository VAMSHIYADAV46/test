import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer } from '@/hooks/useScrollAnimation';

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  
  const skillCategories = [
    {
      title: 'Languages & Tools',
      skills: [
        'Python', 'SQL', 'C++', 'Java', 'TypeScript', 'JavaScript', 
        'Git', 'Postman', 'Docker', 'Firebase'
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'React', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'jQuery',
        'TailwindCSS', 'Framer Motion', 'GSAP'
      ]
    },
    {
      title: 'Core CS Concepts',
      skills: [
        'DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design'
      ]
    }
  ];

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-large mb-6" variants={fadeUpVariants}>
            DEVELOPER DESIGNER CREATOR
          </motion.h2>
          <motion.span className="text-foreground/50" variants={fadeUpVariants}>/</motion.span>
          <motion.h3 className="text-medium mt-8" variants={fadeUpVariants}>Skills</motion.h3>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16 md:space-y-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h4 className="text-xl md:text-2xl font-medium mb-8 text-center" variants={fadeUpVariants}>
                {category.title}
              </motion.h4>
              
              {/* Skills Grid */}
              <motion.div className="grid-skills" variants={staggerContainer}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="group p-6 bg-background border border-border rounded-lg hover:border-foreground/30 transition-all duration-300 hover:scale-105"
                    variants={fadeUpVariants}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-foreground rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Developer Stats/Quote */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="w-24 h-24 mx-auto bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              "I'm a software engineer driven by a passion for turning ideas into clean, 
              intuitive digital experiences."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
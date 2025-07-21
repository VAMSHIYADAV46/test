import heroImage from '@/assets/hero-image.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImage}
                alt="About me"
                className="w-full h-[400px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm tracking-wide uppercase">(About Me)</p>
              <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                I'm a software engineer driven by a passion for turning ideas into clean, 
                intuitive digital experiences.
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">3+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">50+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</p>
              </div>
            </div>

            {/* Download Resume */}
            <div className="mt-8">
              <button className="btn-secondary group">
                Download Resume
                <svg className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
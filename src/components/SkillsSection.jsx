import {
  Code2,
  Database,
  Cpu,
  FileText,
  Braces,
  GitBranch,
  Send,
  Container,
  Flame,
  Globe,
  Zap,
  Palette,
  Server,
  Layers,
  Leaf,
  Code,
  Figma,
  Github,
  Mail,
  Image,
  Package2,
  Cloud
} from "lucide-react"

export default function SkillsSection() {
const skills = [
  { name: "HTML", icon: FileText },
  { name: "CSS", icon: Palette },
  { name: "JavaScript ", icon: Braces },
  { name: "SQL", icon: Database },
  { name: "Git", icon: Code2 },
  { name: "Postman", icon: Send },
  { name: "Render", icon: Container },
  { name: "Vite", icon: Zap },
  { name: "Passport.js", icon: Flame },
  { name: "Netlify", icon: Cloud },
]


  return (
    <div id="skills" className="min-h-screen bg-background px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            DEVELOPER DESIGNER CREATOR
          </h1>
          <div className="mx-auto h-px w-24 bg-foreground/20"></div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-2xl font-medium text-foreground md:text-3xl">Skills</h2>

          <div className="mb-16">
            <h3 className="mb-8 text-center text-xl font-medium text-foreground md:text-2xl">Languages & Tools</h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center rounded-2xl bg-card/50 p-6 transition-all duration-300 hover:bg-card/80 hover:shadow-sm"
                  >
                    <div className="mb-3 rounded-full bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10">
                      <IconComponent className="h-6 w-6 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Additional Skills Categories */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="mb-6 text-lg font-medium text-foreground">Frontend</h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Globe className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  React.js
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Palette className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  Tailwind CSS
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Layers className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  Material UI
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="mb-6 text-lg font-medium text-foreground">Backend</h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Server className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  Node.js
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Layers className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  Express.js
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Leaf className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-lg font-medium text-foreground">Tools</h3>
            <div className="space-y-3">
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Code className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  VS Code
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Figma className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  Figma
                </span>
              </div>
              <div className="group flex items-center justify-center gap-3 rounded-xl bg-card/50 px-4 py-3 transition-all duration-300 hover:bg-card/80">
                <div className="rounded-full bg-foreground/5 p-2 transition-all duration-300 group-hover:bg-foreground/10">
                  <Github className="h-4 w-4 text-foreground/70 transition-all duration-300 group-hover:text-foreground" />
                </div>
                <span className="text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

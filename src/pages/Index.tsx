import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, BarChart, Cpu, Database, Sparkles, MessageSquare, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg-v2.jpg";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import TiltCard from "@/components/ui/TiltCard";

const FloatingOrb = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 blur-xl pointer-events-none"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 1], ["0%", "0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [1, 1, 0]);

  const handleDownloadCv = () => {
    if (isDownloading) return;
    setIsDownloading(true);

    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Presley_chikopa_CV.pdf";
      link.download = "Presley_chikopa_CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsDownloading(false);
    }, 700);
  };

  const skillCategories = [
    {
      icon: Cpu,
      label: "Python & ML Engineering",
      desc: "Python, PyTorch, Deep Learning, NLP, Speech-to-Text & Model Deployment",
      tags: ["Python", "PyTorch", "NLP", "Machine Learning", "Model Deployment"],
    },
    {
      icon: Code2,
      label: "Web & Mobile Development",
      desc: "React.js, Next.js, Vue.js, TypeScript, Flutter, Tailwind CSS & HTML/CSS",
      tags: ["React", "Next.js", "TypeScript", "Vue.js", "Flutter"],
    },
    {
      icon: Terminal,
      label: "AI Orchestration & Prompt Eng.",
      desc: "Automated AI workflows, multi-tool coordination & precise query structuring",
      tags: ["AI Workflows", "Prompt Tuning", "Automation", "LLM Integration"],
    },
    {
      icon: Database,
      label: "Databases & Backend",
      desc: "Supabase, PostgreSQL, SQLite, SQL databases, APIs & Cloud Infrastructure",
      tags: ["PostgreSQL", "Supabase", "SQLite", "REST APIs"],
    },
    {
      icon: BarChart,
      label: "Data Analytics & Power BI",
      desc: "Power BI dashboards, DAX, Power Query & Excel financial modeling",
      tags: ["Power BI", "DAX", "Data Cleaning", "Pandas", "NumPy"],
    },
    {
      icon: MessageSquare,
      label: "Networking & Communication",
      desc: "Computer networks (CCNA), network security & technical presentation",
      tags: ["CCNA Networks", "Network Security", "Public Speaking"],
    },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </motion.div>

        {/* 3D WebGL Canvas Layer */}
        <Hero3DCanvas />

        {/* Floating background lighting orbs */}
        <FloatingOrb delay={0} x="10%" y="20%" size={80} />
        <FloatingOrb delay={1.5} x="80%" y="15%" size={60} />
        <FloatingOrb delay={3} x="70%" y="70%" size={100} />
        <FloatingOrb delay={2} x="20%" y="75%" size={50} />

        {/* Dynamic Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24" style={{ y: textY, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-xs font-medium text-primary mb-8 glow-sm">
              <Sparkles size={14} className="animate-spin text-primary" style={{ animationDuration: "6s" }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for hire & freelance • Blantyre, Malawi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.05] mb-6 drop-shadow-md"
          >
            Data Analyst <span className="text-gradient">||</span> Software Dev <span className="text-gradient">||</span> ML Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary shadow-[0_0_30px_-8px_hsl(var(--primary)/0.6)] backdrop-blur-md"
          >
            Presley Chikopa
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Detail-oriented Data Science student with strong analytical and problem-solving skills, experienced in Python programming, Excel-based financial modeling, machine learning engineering, and web-based system development. Actively involved in building digital platforms, AI-driven solutions, and data analytics systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:shadow-[0_0_35px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <button
              type="button"
              onClick={handleDownloadCv}
              className="inline-flex items-center gap-2 glass rounded-full px-8 py-4 text-sm font-medium text-foreground hover:bg-secondary/80 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {isDownloading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-background/80 backdrop-blur-md">
            <div className="glass rounded-2xl px-8 py-5 text-sm font-medium text-foreground shadow-2xl flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary animate-ping" />
              Downloading CV...
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
          <ChevronDown size={16} className="text-primary" />
        </motion.div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Core Technical Skills</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Specializing in Data Analytics, Machine Learning, Full-Stack Web Development, and AI System Orchestration.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between group cursor-default border border-glass-border hover:border-primary/40 transition-colors">
                    <div>
                      <div
                        style={{ transform: "translateZ(30px)" }}
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm group-hover:bg-primary/20 transition-all duration-300"
                      >
                        <skill.icon size={22} className="text-primary" />
                      </div>
                      <h3
                        style={{ transform: "translateZ(20px)" }}
                        className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors"
                      >
                        {skill.label}
                      </h3>
                      <p
                        style={{ transform: "translateZ(10px)" }}
                        className="text-xs text-muted-foreground leading-relaxed mb-4"
                      >
                        {skill.desc}
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(15px)" }}
                      className="flex flex-wrap gap-1.5 pt-3 border-t border-glass-border/60"
                    >
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counters */}
      <section className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          <TiltCard scale={1.01} maxTilt={6}>
            <div className="glass rounded-3xl p-8 md:p-12 border border-glass-border hover:border-primary/30 transition-colors">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "5+", label: "Platforms & Apps Built" },
                  { value: "7+", label: "Certifications Earned" },
                  { value: "10+", label: "Core Technologies" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                    className="text-center"
                  >
                    <div
                      style={{ transform: "translateZ(25px)" }}
                      className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2"
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{ transform: "translateZ(15px)" }}
                      className="text-xs text-muted-foreground font-medium uppercase tracking-wider"
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
            Have a machine learning project, web application, or data analytics need? Let's connect and turn real-world problems into scalable technology solutions.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start a Conversation
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

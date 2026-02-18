import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Code2, BarChart, Keyboard, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg-v2.jpg";

const FloatingOrb = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 blur-xl"
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
    if (isDownloading) {
      return;
    }

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

  const skills = [
    { icon: Code2, label: "Frontend Development", desc: "React, TypeScript, Html CSS & Javascript" },
    { icon: BarChart, label: "Data Analysis", desc: "Power BI, Excel, Python" },
    { icon: Keyboard, label: "Data Entry", desc: "Accuracy, Speed" },
    { icon: Globe, label: "Backend Development", desc: "Node.js, APIs, Databases" },
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </motion.div>

        {/* Floating orbs */}
        <FloatingOrb delay={0} x="10%" y="20%" size={80} />
        <FloatingOrb delay={1.5} x="80%" y="15%" size={60} />
        <FloatingOrb delay={3} x="70%" y="70%" size={100} />
        <FloatingOrb delay={2} x="20%" y="75%" size={50} />
        <FloatingOrb delay={4} x="50%" y="40%" size={40} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24" style={{ y: textY, opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-xs font-medium text-primary mb-8 glow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for hire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tight leading-[1.05] mb-6"
          >
            Creative
            <br />
            <span className="text-gradient">Developer</span> &{" "}
            <span className="text-gradient">Analyst</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary shadow-[0_0_25px_-12px_hsl(var(--primary)/0.8)]"
          >
            Presley Chikopa
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            I’m passionate about transforming raw data into structured, meaningful insights while building digital experiences that are intuitive and efficient. My focus is where data meets design — merging precision with creativity to craft impactful, intelligent solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              View Projects
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <button
              type="button"
              onClick={handleDownloadCv}
              className="inline-flex items-center gap-2 glass rounded-full px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-all duration-300"
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {isDownloading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 backdrop-blur-sm">
            <div className="glass rounded-2xl px-8 py-5 text-sm font-medium text-foreground shadow-lg">
              Downloading CV
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ChevronDown size={16} className="text-muted-foreground" />
        </motion.div>
      </section>

      {/* Skills */}
      <section className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">What I Do</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Specializing in building beautiful, performant web experiences.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-shadow duration-300">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{skill.label}</h3>
                <p className="text-xs text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "5+", label: "Projects Completed" },
                { value: "5+", label: "Happy Clients" },
                { value: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Have a project in mind or data that needs analysing? I'd love to hear about it. Let's create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300"
          >
            Start a Conversation
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

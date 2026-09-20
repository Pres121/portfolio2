import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    title: "Angels Bracelets",
    description: "A jewelry brand website showcasing handcrafted bracelet collections.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://angelsbracelets.me",
  },
  {
    title: "FunDay Services - Children's Entertainment",
    description: "Children's entertainment service website offering fun and engaging activities for kids",
    tags: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://fundayservices.netlify.app/",
  },
  {
    title: "Timez LTD - Agency Portfolio",
    description: "A professional web development agency showcasing services and expertise",
    tags: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Supabase", "Framer Motion", "Vite", "Netlify"],
    link: "https://timezltd.netlify.app/",
  },
  {
    title: "Noventra Solar - Solar Energy Solutions",
    description: "A website for a solar energy company showcasing their products and services",
    tags: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://noventrasolar.netlify.app/",
  },
  {
    title: "StudyMw - Study Planning Platform",
    description: "A personalized study timetable creator for Malawian students",
    tags: ["React", "TypeScript", "Supabase", "JavaScript"],
    link: "#",
  },
  {
    title: "CurtainMix - Home Decor Platform",
    description: "An elegant e-commerce platform for premium curtain solutions",
    tags: ["React", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "JavaScript", "Supabase"],
    link: "#",
  },
  {
    title: "Timez - Smart Bill Management",
    description: "A comprehensive bill tracking and payment management application",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "JavaScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 right-[-80px] w-[340px] h-[340px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-[-120px] w-[380px] h-[380px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="p-2 rounded-xl bg-primary/10 text-primary">
            <FolderGit2 size={24} />
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Projects</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-lg"
        >
          Selected work, web applications, and data platforms I'm proud of.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-2xl p-7 block h-full group border border-glass-border hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      style={{ transform: "translateZ(25px)" }}
                      className="font-heading font-semibold text-xl group-hover:text-primary transition-colors pr-2"
                    >
                      {project.title}
                    </h3>
                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p
                    style={{ transform: "translateZ(15px)" }}
                    className="text-sm text-muted-foreground leading-relaxed mb-6"
                  >
                    {project.description}
                  </p>

                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="flex flex-wrap gap-2 pt-2 border-t border-glass-border/60"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

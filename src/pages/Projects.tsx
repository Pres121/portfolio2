import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "Javascript",
    ],
    link: "https://fundayservices.netlify.app/",
  },
  {
    title: "Timez LTD - Agency Portfolio",
    description: "A professional web development agency showcasing services and expertise",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Javascript",
      "Supabase",
      "Framer Motion",
      "Vite",
      "Netlify",
    ],
    link: "https://timezltd.netlify.app/",
  },
  {
    title: "Noventra Solar - Solar Energy Solutions",
    description: "A website for a solar energy company showcasing their products and services",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "Javascript",
    ],
    link: "https://noventrasolar.netlify.app/",
  },
  {
    title: "StudyMw - Study Planning Platform",
    description: "A personalized study timetable creator for Malawian students",
    tags: ["React", "TypeScript", "Supabase", "Javascript"],
    link: "#",
  },
  {
    title: "CurtainMix - Home Decor Platform",
    description: "An elegant e-commerce platform for premium curtain solutions",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Vite",
      "Tailwind CSS",
      "Javascript",
      "Supabase",
    ],
    link: "#",
  },
  {
    title: "Timez - Smart Bill Management",
    description: "A comprehensive bill tracking and payment management application",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "Javascript"],
    link: "#",
  },
  
];

const Projects = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 right-[-80px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-120px] w-[360px] h-[360px] rounded-full bg-primary/5 blur-3xl" />
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Selected work I'm proud of.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 group block"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-lg">{project.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

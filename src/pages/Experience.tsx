import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Front-end Developer & Data Analyst",
    company: "Tigule Marketplace",
    period: "2025 – Present",
    description:
      "Contributing to strategic planning and decision-making to drive the growth and long-term vision of Tigule Marketplace & Performing regular website inspections and testing to ensure optimal performance, stability, and security",
  },
  {
    role: "React TypeScript Developer",
    company: "Angels Bracelets",
    period: "2025 – 2026",
    description:
      "Developed a modern e-commerce website for a jewelry business, focusing on UI/UX and responsive design.",
  },
  {
    role: "Data Preprocessor",
    company: "Freelance",
    period: "2024 – 2025",
    description:
      "Worked with raw datasets by cleaning, preprocessing, and visualizing insights to support decision-making.",
  },
];

const Experience = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 right-[-80px] w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-120px] w-[340px] h-[340px] rounded-full bg-primary/5 blur-3xl" />
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          My professional journey so far.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                    <span className="text-xs text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

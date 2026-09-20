import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const experiences = [
  {
    role: "Technology & Data Lead",
    company: "Youth for Change Network (YCN)",
    period: "08/2026 – Present",
    location: "Lilongwe (Remote)",
    bullets: [
      "Lead the development and implementation of YCN's digital infrastructure and systems.",
      "Manage and maintain organisational data systems, ensuring data accuracy, security, and accessibility.",
      "Collect, manage, and analyse data to generate insights and support evidence-based decision-making.",
      "Develop digital solutions and improve workflows to enhance organisational efficiency and productivity.",
      "Provide technical leadership and support in technology, data management, and digital transformation initiatives.",
    ],
  },
  {
    role: "ML Engineer & Web Developer",
    company: "Sure-Defense Systems MW",
    period: "06/2026 – Present",
    location: "Malawi",
    bullets: [
      "Develop and deploy machine learning models to solve business problems and automate processes.",
      "Build, maintain, and improve web applications and internal company platforms.",
      "Work with data to identify insights, patterns, and opportunities for optimization.",
      "Integrate AI/ML solutions into existing products and business workflows.",
      "Develop APIs and backend services to support web and machine learning applications.",
      "Collaborate with other teams to understand business requirements and turn them into technical solutions.",
      "Monitor, test, and improve the performance, reliability, and scalability of applications and ML systems.",
    ],
  },
  {
    role: "Associate Developer, Data Analyst, ML Engineer",
    company: "Tigule Marketplace",
    period: "11/2025 – Present",
    location: "Blantyre (Remote)",
    bullets: [
      "Supported growth of the Tigule Marketplace by onboarding sellers and assisting with product listings.",
      "Helped optimize marketplace operations to improve user experience and engagement.",
      "Assisted in planning and executing growth strategies to increase traffic.",
      "Contributed to marketplace development by supporting feature testing and updates.",
      "Worked closely with the development team to identify bugs and suggest improvements.",
      "Provided technical and operational support for platform users and sellers.",
    ],
  },
  {
    role: "Front-End Web Developer",
    company: "Angels Bracelets",
    period: "08/2025 – 09/2025",
    location: "Blantyre",
    bullets: [
      "Developed and implemented the front-end website for Angels Bracelets using React.js and TypeScript.",
      "Integrated Bootstrap and responsive design principles, ensuring a seamless user experience across devices.",
      "Built reusable UI components to improve development efficiency and maintainability.",
      "Collaborated with team members to align design and functionality with business goals.",
    ],
  },
  {
    role: "Data Entry & Cleaning",
    company: "Freelance",
    period: "04/2025 – 05/2025",
    location: "Blantyre",
    bullets: [
      "Entered and maintained accurate sales data in Excel spreadsheets.",
      "Cleaned and formatted large datasets to improve readability and consistency.",
      "Applied Excel formulas and functions to validate and cross-check data integrity.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 right-[-80px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-[-120px] w-[360px] h-[360px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <Briefcase size={24} />
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Experience</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-xl"
        >
          My professional journey across Data Analysis, Software Engineering, Machine Learning, and Technical Leadership.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="relative">
          {/* Timeline central glowing connector line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* 3D Glowing Timeline Node */}
                <div className="absolute left-0 top-3 w-10 h-10 rounded-full glass flex items-center justify-center border border-primary/40 shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <TiltCard scale={1.01} maxTilt={6}>
                  <div className="glass rounded-2xl p-6 md:p-7 border border-glass-border hover:border-primary/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3
                        style={{ transform: "translateZ(20px)" }}
                        className="font-heading font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors"
                      >
                        {exp.role}
                      </h3>
                      <span
                        style={{ transform: "translateZ(15px)" }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shrink-0"
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <div
                      style={{ transform: "translateZ(15px)" }}
                      className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4"
                    >
                      <span className="text-primary">{exp.company}</span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      )}
                    </div>

                    <ul
                      style={{ transform: "translateZ(10px)" }}
                      className="space-y-2 text-sm text-secondary-foreground"
                    >
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

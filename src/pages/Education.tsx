import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Data Science",
    school: "Mzuzu University",
    period: "2024 – Present",
    description:
      "Conducted research in Machine Learning and Predictive Analytics & Gained practical experience in data collection and wrangling",
  },
  {
    degree: "High School Certificate",
    school: "James Chiona Catholic High School",
    period: "2019 – 2023",
    description:
      "Distinctions in English and Sciences & Top 5% of class",
  },
];

const certifications = [
  "CCNA:Introduction to Networks",
  "Certified in Pandas",
  "Certified in Python Programming",
  "Certified in Data Visualization with Matplotlib",
  "Certified in Data Analysis with Power BI",
  "Malawi School Certificate of Education"
];

const Education = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 left-[-80px] w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 right-[-120px] w-[340px] h-[340px] rounded-full bg-primary/5 blur-3xl" />
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Academic background and certifications.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="space-y-8 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-heading font-semibold text-lg">{edu.degree}</h3>
                  <span className="text-xs text-primary font-medium">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                <p className="text-sm text-secondary-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-heading font-semibold mb-6">Certifications</h2>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="glass rounded-full px-4 py-2 text-sm text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

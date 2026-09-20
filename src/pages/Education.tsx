import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const educationList = [
  {
    degree: "Bachelor Of Science In Data Science (ongoing)",
    school: "Mzuzu University",
    period: "11/2024 – Present",
    location: "Mzuzu, Malawi",
    highlights: [
      "Active Member of the Mzuzu University Data Science Community.",
      "Obtained an average score of 85% in Python programming assessments, demonstrating strong proficiency in coding and analytical problem-solving.",
      "Conducted practical research in Machine Learning, predictive modeling, and data wrangling.",
    ],
  },
  {
    degree: "CCNA Computer Networks",
    school: "Cisco Networking Academy",
    period: "10/2025 – 12/2025",
    location: "Mzuzu, Malawi",
    highlights: [
      "Mastered fundamentals of computer networking, network topologies, and routing/switching.",
      "Deep understanding of OSI and TCP/IP models, IP addressing, and network security concepts.",
    ],
  },
];

const certificationCards = [
  {
    title: "CCNA: Introduction to Computer Networks",
    issuer: "Cisco Networking Academy",
    desc: "Basics of networking, devices & topologies, OSI & TCP/IP models, IP addressing fundamentals, routing, switching, and security.",
  },
  {
    title: "CCNA: Digital Safety and Security Awareness",
    issuer: "Cisco Networking Academy",
    desc: "Cybersecurity awareness, digital threat mitigation, and network protection practices.",
  },
  {
    title: "CCNA: Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    desc: "Data collection methodologies, analytical thinking, and foundational data science principles.",
  },
  {
    title: "Data Cleaning",
    issuer: "Kaggle",
    desc: "Hands-on experience cleaning and preparing datasets, handling missing values, correcting data types, and using Pandas & NumPy.",
  },
  {
    title: "Pandas Certification",
    issuer: "Kaggle",
    desc: "Proficiency in using Pandas for data manipulation, filtering, sorting, grouping, and aggregating complex datasets.",
  },
  {
    title: "Python Certification",
    issuer: "Kaggle",
    desc: "Strong Python programming skills including variables, functions, OOP concepts, lists, dictionaries, and sets.",
  },
  {
    title: "Malawi School Certificate of Education (MSCE)",
    issuer: "James Chiona Catholic High School",
    desc: "Achieved 15 points at secondary school level with distinctions in English and Sciences.",
  },
];

const Education = () => {
  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-24 left-[-80px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-[-120px] w-[360px] h-[360px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={24} />
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Education</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-xl"
        >
          Academic qualifications, data science degree program, and specialized technical certifications.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        {/* Academic Degree Section */}
        <div className="space-y-8 mb-16">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <TiltCard scale={1.01} maxTilt={6}>
                <div className="glass rounded-2xl p-6 md:p-7 flex flex-col md:flex-row gap-5 border border-glass-border hover:border-primary/40 transition-colors">
                  <div
                    style={{ transform: "translateZ(25px)" }}
                    className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-1 border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                  >
                    <GraduationCap size={22} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3
                        style={{ transform: "translateZ(20px)" }}
                        className="font-heading font-semibold text-lg md:text-xl"
                      >
                        {edu.degree}
                      </h3>
                      <span
                        style={{ transform: "translateZ(15px)" }}
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full shrink-0 border border-primary/20"
                      >
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>

                    <div
                      style={{ transform: "translateZ(15px)" }}
                      className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-4"
                    >
                      <span className="text-primary">{edu.school}</span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>

                    <ul
                      style={{ transform: "translateZ(10px)" }}
                      className="space-y-2 text-sm text-secondary-foreground"
                    >
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={22} className="text-primary" />
            <h2 className="text-2xl font-heading font-semibold">Certifications & Training</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {certificationCards.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <TiltCard maxTilt={8} scale={1.02} className="h-full">
                  <div className="glass rounded-2xl p-6 h-full border border-glass-border hover:border-primary/40 transition-colors group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          style={{ transform: "translateZ(15px)" }}
                          className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-md"
                        >
                          {cert.issuer}
                        </span>
                      </div>
                      <h3
                        style={{ transform: "translateZ(20px)" }}
                        className="font-heading font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors"
                      >
                        {cert.title}
                      </h3>
                      <p
                        style={{ transform: "translateZ(10px)" }}
                        className="text-xs text-muted-foreground leading-relaxed"
                      >
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

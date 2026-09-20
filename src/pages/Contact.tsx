import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, Globe } from "lucide-react";
import { send } from "@emailjs/browser";
import { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowConfirmation(false);

    try {
      await send(
        "service_s86b8vm",
        "template_mh9aomr",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "YQNLkW4LIzb4WtQTN"
      );

      setShowConfirmation(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setShowConfirmation(false), 4000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "preschiko@gmail.com",
      href: "mailto:preschiko@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Blantyre, Malawi (Available for Remote)",
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+265 888 242 463",
      href: "tel:+265888242463",
    },
    {
      icon: Globe,
      label: "Portfolio Site",
      value: "devpresley.netlify.app",
      href: "https://devpresley.netlify.app",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-20 right-[-60px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-[-100px] w-[340px] h-[340px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="p-2.5 rounded-xl bg-primary/10 text-primary">
            <MessageSquare size={24} />
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Contact</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Let's work together on Data Science, ML engineering, or Web Development projects.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-4">
            {contactItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <TiltCard maxTilt={10} scale={1.02}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="glass rounded-2xl p-5 flex items-start gap-4 border border-glass-border hover:border-primary/40 transition-colors block group"
                  >
                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <item.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3
                        style={{ transform: "translateZ(15px)" }}
                        className="font-heading font-semibold text-sm mb-1 group-hover:text-primary transition-colors"
                      >
                        {item.label}
                      </h3>
                      <p
                        style={{ transform: "translateZ(10px)" }}
                        className="text-sm text-muted-foreground break-all"
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3"
          >
            <TiltCard maxTilt={6} scale={1.01}>
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 space-y-5 border border-glass-border hover:border-primary/30 transition-colors"
              >
                <h2
                  style={{ transform: "translateZ(20px)" }}
                  className="font-heading font-bold text-xl mb-4 text-foreground"
                >
                  Send a Message
                </h2>

                <div style={{ transform: "translateZ(15px)" }}>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/70 border border-border rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div style={{ transform: "translateZ(15px)" }}>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="yourname@example.com"
                    value={form.email}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/70 border border-border rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                  />
                </div>

                <div style={{ transform: "translateZ(15px)" }}>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full bg-secondary/70 border border-border rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                  />
                </div>

                <div style={{ transform: "translateZ(20px)" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300 disabled:opacity-60 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {showConfirmation && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl bg-primary/15 border border-primary/30 px-5 py-3 text-sm text-primary font-medium"
                  >
                    Thanks for reaching out! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

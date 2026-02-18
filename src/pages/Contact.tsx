import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { send } from "@emailjs/browser";
import { useState } from "react";

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

  return (
    <div className="relative min-h-screen pt-24 section-padding overflow-hidden">
      <div className="absolute -top-20 right-[-60px] w-[280px] h-[280px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-100px] w-[320px] h-[320px] rounded-full bg-primary/5 blur-3xl" />
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Let's work together. Drop me a message.
        </motion.p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <Mail size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">preschiko@gmail.com</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Malawi / Remote</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <Phone size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-sm mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+265 888 242 463</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleInputChange}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleInputChange}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                name="message"
                value={form.message}
                onChange={handleInputChange}
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={14} />
            </button>
            {showConfirmation && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-secondary px-4 py-2 text-sm text-foreground"
              >
                Thanks for your message. I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

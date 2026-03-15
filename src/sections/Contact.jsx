import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiSend, FiMail, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  { icon: <FiMail size={18} />, label: 'developer@email.com', href: 'mailto:developer@email.com' },
  { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com' },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a question or want to work together? I'd love to hear from you"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 space-y-5"
        >
          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)]/50 border text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)] ${
                errors.name ? 'border-red-500' : 'border-[var(--color-dark-border)]'
              }`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)]/50 border text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)] ${
                errors.email ? 'border-red-500' : 'border-[var(--color-dark-border)]'
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)]/50 border text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)] resize-none ${
                errors.message ? 'border-red-500' : 'border-[var(--color-dark-border)]'
              }`}
              placeholder="Your message..."
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-shiny-gold font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {submitted ? 'Message Sent! ✓' : <>Send Message <FiSend size={14} /></>}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-light)] mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3">
              {contactLinks.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-dark-bg)]/50 border border-[var(--color-dark-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)]/30 transition-colors"
                >
                  <span className="royal-icon">{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-2xl p-6 flex items-center justify-center gap-3 text-[var(--color-accent-light)] hover:border-[var(--color-accent)]/30 transition-all group"
          >
            <FiDownload size={20} className="group-hover:translate-y-0.5 transition-transform" />
            <span className="font-medium">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

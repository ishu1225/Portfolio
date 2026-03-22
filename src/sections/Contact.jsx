import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiSend, FiDownload } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Create a Gmail compose link with the form data
      const recipient = "singhishu1225@gmail.com"; 
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(form.message);
      
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
      window.open(gmailLink, '_blank');

      setSubmitted(true);
      setForm({ subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a question or want to work together? I'd love to hear from you"
      />

      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto w-full">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 space-y-4 w-full"
        >
          <div>
            <label className="block text-xs font-medium text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-[var(--color-dark-bg)]/50 border text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)] ${
                errors.subject ? 'border-red-500' : 'border-[var(--color-dark-border)]'
              }`}
              placeholder="What is this regarding?"
            />
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
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

        {/* Download Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/18CKDTsoUUHBgUAuc295uEe6NvfFAL6pq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full glass rounded-2xl p-4 flex items-center justify-center gap-3 text-[var(--color-accent-light)] hover:border-[var(--color-accent)]/30 transition-all group cursor-pointer"
        >
          <FiDownload size={20} className="group-hover:translate-y-0.5 transition-transform" />
          <span className="font-medium">Download Resume</span>
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

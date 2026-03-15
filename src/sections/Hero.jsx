import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';

const roles = ['Software Developer', 'Problem Solver', 'AI Enthusiast', 'Tech Learner'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 opacity-[0.03] rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-[var(--color-dark-border)] text-[var(--color-accent-light)] bg-[var(--color-accent)]/5"
          >
            ✦ Available for Internships & Placements
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight flex items-center flex-wrap gap-2">
            Hi, I'm{' '}
            <span className="gradient-text">Eshu</span>
            <FaCrown className="text-3xl sm:text-4xl md:text-6xl text-yellow-400 royal-icon relative -top-1 md:-top-2" />
          </h1>

          <p className="mt-4 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl">
            Computer Science Student{' '}
            <span className="text-[var(--color-text-muted)]">|</span>{' '}
            Aspiring Software Engineer
          </p>

          {/* Typing effect */}
          <div className="mt-6 h-8 flex items-center">
            <span className="text-lg text-[var(--color-text-muted)]">{'> '}</span>
            <span className="text-lg text-[var(--color-accent-light)] font-mono">{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-0.5 w-0.5 h-5 bg-[var(--color-accent-light)] inline-block"
            />
          </div>

          <p className="mt-6 text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
            Passionate about solving complex problems through clean code and innovative technology.
            I love building impactful software that makes a difference — from AI-powered applications
            to scalable systems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="projects" smooth offset={-80} duration={600}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-shiny-gold font-medium text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                View Projects
                <FiArrowDown size={16} />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl border border-[var(--color-dark-border)] text-[var(--color-text-primary)] font-medium text-sm flex items-center gap-2 hover:bg-[var(--color-dark-hover)] transition-all"
            >
              <FiDownload size={16} />
              Resume
            </motion.a>

            <Link to="contact" smooth offset={-80} duration={600}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl border border-[var(--color-dark-border)] text-[var(--color-text-primary)] font-medium text-sm flex items-center gap-2 hover:bg-[var(--color-dark-hover)] transition-all cursor-pointer"
              >
                <FiMail size={16} />
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

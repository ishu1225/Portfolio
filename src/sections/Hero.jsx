import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload, FiMail, FiExternalLink } from 'react-icons/fi';
import profilePic from '../../images/profile picture.jpeg';

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
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8 md:mb-10 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border border-[var(--color-dark-border)] text-[var(--color-accent-light)] bg-[var(--color-accent)]/5"
            >
              ✦ Available for Internships & Placements
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="w-full flex justify-center mb-10"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[var(--color-accent)] overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                <img
                  src={profilePic}
                  alt="Eshank Singh Profile"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-heading)] leading-tight flex items-center justify-center flex-wrap gap-2 text-center">
            Hi, I'm{' '}
            <span className="gradient-text">Eshank Singh</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-[var(--color-accent-light)] max-w-2xl text-center mx-auto tracking-wide">
            Data Analyst | AI System Builder
          </p>

          <p className="mt-2 text-lg text-[var(--color-text-secondary)] max-w-2xl text-center mx-auto tracking-wide font-medium">
            Building scalable AI & secure systems using Python & ML
          </p>

          {/* Typing effect */}
          <div className="mt-6 h-8 flex items-center justify-center">
            <span className="text-lg text-[var(--color-text-muted)]">{'> '}</span>
            <span className="text-lg text-[var(--color-accent-light)] font-mono">{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-0.5 w-0.5 h-5 bg-[var(--color-accent-light)] inline-block"
            />
          </div>



          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
              href="https://drive.google.com/file/d/18CKDTsoUUHBgUAuc295uEe6NvfFAL6pq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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

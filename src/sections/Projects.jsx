import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';

import imgRebalancer from '../../images/investment rebalancer.avif';
import imgVault from '../../images/secure vault.jpg';
import imgLandUse from '../../images/Land Use analysis.jpg';
import imgOsBiometric from '../../images/Os biometric auth.webp';
import imgPortfolio from '../../images/Portfolio website.png';

const projects = [
  {
    title: 'AI Investment Rebalancer',
    problem: 'Manual portfolio rebalancing is time-consuming and error-prone for individual investors.',
    description: 'An AI-powered tool that analyzes portfolio allocations and suggests optimal rebalancing strategies using machine learning models trained on historical market data.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    tags: ['AI / ML'],
    github: 'https://github.com/ARCHI-DUBEY/Rebalancer',
    demo: '',
    image: imgRebalancer,
    features: ['ML-based prediction engine', 'Real-time market data', 'Risk assessment scoring', 'Portfolio visualization'],
  },
  {
    title: 'Secure Vault — Face Auth',
    problem: 'Traditional password-based authentication is vulnerable to brute-force attacks.',
    description: 'A secure file vault application using facial recognition for authentication. Implements multi-factor security with liveness detection to prevent spoofing attacks.',
    tech: ['Python', 'OpenCV', 'Flask', 'SQLite'],
    tags: ['Security'],
    github: 'https://github.com/ishu1225/ML-based-Aadhar-Authetication-Paper',
    demo: '',
    image: imgVault,
    features: ['Face recognition auth', 'Liveness detection', 'Encrypted file storage', 'Activity logging'],
  },
  {
    title: 'India Land Use Analysis',
    problem: 'Need for comprehensive analysis of land use patterns across India for better planning.',
    description: 'A data analysis project that explores and visualizes land use data in India, identifying trends and insights useful for urban planning and agriculture.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    tags: ['Data Analysis'],
    github: 'https://github.com/ishu1225/India-land-Use-Analysis',
    demo: '',
    image: imgLandUse,
    features: ['Data visualization', 'Trend analysis', 'Comprehensive reporting', 'Geospatial insights'],
  },
  {
    title: 'OS Biometric Auth',
    problem: 'Standard OS login mechanisms lack modern biometric options.',
    description: 'An OS-level biometric authentication system integrating fingerprint and face recognition modules with the operating system login pipeline for enhanced system security.',
    tech: ['C++', 'Python', 'Linux', 'PAM'],
    tags: ['System'],
    github: 'https://github.com/ishu1225/OSlevelbiometric',
    demo: '',
    image: imgOsBiometric,
    features: ['Fingerprint integration', 'Face recognition', 'PAM module', 'Fallback password'],
  },
  {
    title: 'Dev Portfolio Website',
    problem: 'Need a professional online presence to showcase skills and projects.',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations, dark/light mode, and a clean developer-focused design.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    tags: ['Web Dev'],
    github: 'https://github.com',
    demo: '',
    image: imgPortfolio,
    features: ['Dark/Light mode', 'Smooth animations', 'Responsive design', 'SEO optimized'],
  },
];

const filters = ['All', 'Data Analysis', 'AI / ML', 'Web Dev', 'Security', 'System'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active));

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        title="Projects"
        subtitle="A collection of projects I've built — from AI systems to security tools"
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-xl text-sm transition-all cursor-pointer ${
              active === f
                ? 'bg-shiny-gold'
                : 'border border-[var(--color-dark-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-text-primary)]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map(project => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 group hover:border-[var(--color-accent)]/50 hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-dark-hover)] transition-colors">
                      <FiGithub size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-dark-hover)] transition-colors">
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Problem */}
              <p className="text-xs text-[var(--color-text-muted)] mb-2 italic">
                Problem: {project.problem}
              </p>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.features.map(f => (
                  <span key={f} className="text-xs px-2 py-0.5 rounded-md bg-[var(--color-dark-bg)]/50 text-[var(--color-text-muted)] border border-[var(--color-dark-border)]">
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--color-dark-border)]">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}

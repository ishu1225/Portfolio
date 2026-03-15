import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiExternalLink, FiAward, FiCode, FiUsers, FiStar } from 'react-icons/fi';

const certifications = [
  {
    title: 'Machine Learning',
    org: 'Coursera (Stanford)',
    year: '2025',
    link: '#',
  },
  {
    title: 'Python Programming',
    org: 'Udemy',
    year: '2024',
    link: '#',
  },
  {
    title: 'Cloud Fundamentals',
    org: 'AWS',
    year: '2025',
    link: '#',
  },
];

const achievements = [
  {
    icon: <FiCode size={18} />,
    title: 'Competitive Coding',
    desc: 'Solved 500+ problems on LeetCode and other platforms',
  },
  {
    icon: <FiUsers size={18} />,
    title: 'Hackathon Finalist',
    desc: 'Top finalist in multiple university-level hackathons',
  },
  {
    icon: <FiStar size={18} />,
    title: 'Technical Competitions',
    desc: 'Participated and won prizes in coding competitions',
  },
  {
    icon: <FiAward size={18} />,
    title: 'Academic Excellence',
    desc: 'Consistent academic performance with distinction',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        title="Certifications & Achievements"
        subtitle="Credentials and milestones from my journey in tech"
      />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Certifications Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-light)] mb-6">
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass rounded-xl p-5 group hover:border-[var(--color-accent)]/30 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{cert.org}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{cert.year}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-dark-hover)] transition-colors"
                  >
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-light)] mb-6">
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass rounded-xl p-5 group hover:border-[var(--color-accent)]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)] shrink-0 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-light)] transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{ach.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

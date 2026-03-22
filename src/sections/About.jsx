import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';
import { FiTarget, FiCpu, FiServer, FiDatabase, FiLayers } from 'react-icons/fi';

const interests = [
  { icon: <FiCpu />, label: 'Artificial Intelligence' },
  { icon: <FiLayers />, label: 'System Design' },
  { icon: <FiServer />, label: 'Operating Systems' },
  { icon: <FiDatabase />, label: 'Databases' },
  { icon: <HiOutlineSparkles />, label: 'Data Analysis' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="A quick look into who I am, what I study, and what drives me"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
              <HiOutlineCode size={20} />
            </div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Introduction</h3>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            I'm a Data Analyst passionate about uncovering insights from data and building efficient systems.
            I enjoy diving deep into data, exploring new technologies, and creating tools that solve
            real-world problems. From data visualization to machine learning, I love the
            challenge of turning complex datasets into actionable insights.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
              <HiOutlineAcademicCap size={20} />
            </div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Education</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[var(--color-text-primary)] font-medium">BTech in Computer Science</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Lovely Professional University, Jalandhar, Punjab</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">CGPA: 8.5 | Expected Graduation: 2027</p>
            </div>
            <div className="pt-3 border-t border-[var(--color-dark-border)]">
              <p className="text-[var(--color-text-primary)] font-medium">Class 12th</p>
              <p className="text-sm text-[var(--color-text-secondary)]">VPCS, Bhind, MP</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Percentage: 94.6%</p>
            </div>
            <div className="pt-3 border-t border-[var(--color-dark-border)]">
              <p className="text-[var(--color-text-primary)] font-medium">Class 10th</p>
              <p className="text-sm text-[var(--color-text-secondary)]">VPCS, Bhind, MP</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Percentage: 94.4%</p>
            </div>
          </div>
        </motion.div>

        {/* Technical Interests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
              <HiOutlineLightBulb size={20} />
            </div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map(i => (
              <motion.div
                key={i.label}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-dark-bg)]/50 border border-[var(--color-dark-border)] text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent-light)] transition-colors"
              >
                <span className="text-base royal-icon">{i.icon}</span>
                {i.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Vision */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
              <FiTarget size={20} />
            </div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">Career Vision</h3>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            My goal is to become a well-rounded Data Analyst who builds data solutions that impact millions.
            I'm focused on mastering data architecture, contributing to open-source, and working on cutting-edge
            analytics — whether it's predictive modeling, big data pipelines, or business intelligence. I believe
            in writing queries and code that are not just functional, but efficient and maintainable.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

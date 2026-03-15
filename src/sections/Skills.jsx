import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import {
  SiCplusplus, SiPython, SiJavascript, SiReact, SiNodedotjs, SiFlask,
  SiGit, SiLinux, SiGithub, SiDocker
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { HiOutlineCubeTransparent, HiOutlineServer, HiOutlineDatabase, HiOutlineGlobeAlt } from 'react-icons/hi';

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Linux', icon: <SiLinux /> },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'DSA', icon: <HiOutlineCubeTransparent /> },
      { name: 'Operating Systems', icon: <HiOutlineServer /> },
      { name: 'Database Systems', icon: <HiOutlineDatabase /> },
      { name: 'Computer Networks', icon: <HiOutlineGlobeAlt /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <DiVisualstudio /> },
      { name: 'Docker', icon: <SiDocker /> },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies and tools I work with to bring ideas to life"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6 hover:border-[var(--color-accent)]/30 transition-colors"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-light)] mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map(skill => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--color-dark-bg)]/50 border border-[var(--color-dark-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:border-[var(--color-accent)]/30 transition-colors"
                >
                  <span className="text-base royal-icon">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

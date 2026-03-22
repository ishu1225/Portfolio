import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import { FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'Bits and Bytes of Computing',
    org: 'Coursera (Google)',
    year: '2024',
    link: 'https://coursera.org/share/d07d56eda1c4678b3896139bc7af1774',
    // Updated image link because previous was broken
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Fundamentals of Computer Networks',
    org: 'Coursera (Google)',
    year: '2024',
    link: 'https://coursera.org/share/be6510c0418b898d8c53bc214963cd11',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Hardware and Operating System',
    org: 'Coursera (Google)',
    year: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/07MPVOO16ADL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
  },
  {
    title: 'Competitive Programming Training',
    org: 'Training',
    year: '2024',
    link: 'https://drive.google.com/file/d/1TeABwcr_EeC2yd3Ci8wXXlqDPkKgPlDs/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        title="Certifications"
        subtitle="Credentials from my learning journey in tech"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative flex flex-col glass rounded-xl h-[280px] group hover:border-[var(--color-accent)] transition-all overflow-hidden cursor-pointer"
          >
            {/* Image section */}
            <div className="h-1/2 w-full overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
            </div>
            
            {/* Text Content */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-[var(--color-dark-card)] z-10 transition-colors duration-300">
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)] leading-tight">
                  {cert.title}
                </h4>
                <p className="text-sm text-[var(--color-accent-light)] mt-2">{cert.org}</p>
              </div>
              <div className="flex justify-start items-center mt-4">
                <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-1 font-medium pb-1 border-b border-transparent group-hover:border-[var(--color-accent)]">
                  Verify <FiExternalLink size={14} />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}

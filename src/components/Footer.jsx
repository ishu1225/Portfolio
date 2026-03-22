import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <HiOutlineMail size={18} />, href: 'mailto:developer@email.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-dark-border)] bg-[var(--color-dark-card)]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent-light)] tracking-[0.2em]">
            Direct Contact
          </h3>
          <div className="flex items-center justify-center gap-4">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-dark-hover)] transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

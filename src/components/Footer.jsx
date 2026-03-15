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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] gradient-text">
              &lt;Dev /&gt;
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Building technology that solves real problems.
            </p>
          </div>

          <div className="flex items-center gap-4">
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

        <div className="mt-8 pt-6 border-t border-[var(--color-dark-border)] text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} All rights reserved. Designed & built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

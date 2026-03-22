import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
          {children}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-[family-name:var(--font-heading)] gradient-text inline-block pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--color-text-secondary)] max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

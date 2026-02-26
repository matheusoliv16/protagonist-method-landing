import React from 'react';
import './section.css';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: 'dark' | 'darker' | 'light';
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  variant = 'dark',
  className = '',
}) => {
  const classes = ['section', `section--${variant}`, className].filter(Boolean).join(' ');
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default Section;

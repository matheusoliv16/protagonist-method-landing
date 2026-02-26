import React from 'react';
import './container.css';

interface ContainerProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, narrow = false, className = '' }) => {
  const classes = ['container', narrow ? 'container--narrow' : '', className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
};

export default Container;

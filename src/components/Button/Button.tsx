import React from 'react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
}

const WHATSAPP_LINK =
  'https://wa.me/558592716776?text=Olá%20Leonardo,%20quero%20emagrecer%20comendo%20o%20que%20eu%20gosto';

const Button: React.FC<ButtonProps> = ({
  children,
  href = WHATSAPP_LINK,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;

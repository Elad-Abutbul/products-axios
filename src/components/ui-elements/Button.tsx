import React from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

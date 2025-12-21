import React from 'react';

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;

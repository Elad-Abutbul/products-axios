import React from 'react';
import Input from '../ui-elements/Input';

interface InputFilterProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFilter: React.FC<InputFilterProps> = (props) => {
  return (
    <div className='search-wrapper'>
      <i className='fa-regular fa-magnifying-glass search-icon'></i>
      <Input
        type='text'
        className='search-input'
        placeholder='Search for a product...'
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputFilter;

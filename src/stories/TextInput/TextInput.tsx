import { useState } from 'react';
import './TextInput.css';

export type TextInputTypes = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
};

export default function TextInput({ name, type, label, placeholder }: TextInputTypes) {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        placeholder={placeholder}
      />
    </div>
  );
}

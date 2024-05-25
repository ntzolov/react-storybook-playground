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
      <label className='flex justify-center items-center text-slate-200' htmlFor={name}>
        {label}
      </label>
      <input
        className='w-full bg-neutral-600 p-1 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-orange-400'
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        placeholder={placeholder}
      />
    </div>
  );
}

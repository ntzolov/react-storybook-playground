import { useState } from 'react';
import { Button } from '../Button/Button';
import './Counter.css';

interface CounterProps {
  backgroundColor?: string;
  color?: string;
}

export default function Counter({ backgroundColor = '#fff', color = '#000' }: CounterProps) {
  const [counter, setCounter] = useState<number>(0);

  const handleOnClick = (eType: string) => {
    if (eType === 'Increment') {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <div className='counter' style={{ backgroundColor }}>
      <span style={{ color }}>Counter: {counter}</span>
      <Button
        onClick={() => handleOnClick('Increment')}
        size='small'
        backgroundColor='#00ff61'
        label='+'
      />
      <Button
        onClick={() => handleOnClick('Decrement')}
        size='small'
        backgroundColor='#00ff61'
        label='-'
      />
    </div>
  );
}

import React from 'react';

import { Header } from './Header/Header';
import './page.css';
import Counter from './Counter/Counter';
import Rating from './Rating/Rating';
import TextInput from './TextInput/TextInput';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <div className='counter-component'>
        <p>Counter component:</p>
        <Counter backgroundColor='#535559' color='#d5d6de' />
      </div>

      <div className='rating-component'>
        <p>Rating component:</p>
        <div className='flex justify-center'>
          <Rating />
        </div>
      </div>

      <div className='input-component'>
        <p>Input component:</p>
        <TextInput name='name' type='text' label='Name' placeholder='Enter your name...' />
      </div>
      <h1 className='text-blue-700 font-bold text-3xl'>Tailwind added 🇧🇬</h1>
    </article>
  );
};

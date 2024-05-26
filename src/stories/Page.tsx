import React from 'react';

import { Header } from './Header/Header';
import './page.css';
import Counter from './Counter/Counter';
import Rating from './Rating/Rating';
import TextInput from './TextInput/TextInput';
import Separator from './Separator/Separator';

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

      <Separator margin={10} />

      <div className='counter-component'>
        <p>Counter component:</p>
        <Counter backgroundColor='#535559' color='#d5d6de' />
      </div>

      <Separator margin={10} />

      <div className='rating-component'>
        <p>Rating component:</p>
        <div className='flex justify-center'>
          <Rating />
        </div>
      </div>

      <Separator margin={10} />

      <div className='input-component'>
        <p>Input component:</p>
        <TextInput name='name' type='text' label='Name' placeholder='Enter your name...' />
      </div>

      <Separator margin={10} />

      <h1 className='text-violet-600 font-bold text-3xl'>Tailwind added 🇧🇬</h1>

      <Separator margin={10} />
    </article>
  );
};

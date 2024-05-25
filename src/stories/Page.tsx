import React from 'react';

import { Header } from './Header/Header';
import './page.css';
import Counter from './Counter/Counter';
import Rating from './Rating/Rating';

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
        <div className='stars'>
          <Rating />
        </div>
      </div>
    </article>
  );
};

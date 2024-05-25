import React from 'react';

import { Header } from './Header/Header';
import './page.css';
import Counter from './Counter/Counter';

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

      <Counter backgroundColor='#535559' color='#d5d6de' />
    </article>
  );
};

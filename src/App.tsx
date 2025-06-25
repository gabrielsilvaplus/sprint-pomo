import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Olá Mundo!
        <button>
          <TimerIcon></TimerIcon>
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repudiandae incidunt recusandae tempora cum officiis dolorem mollitia
        quam minus cupiditate culpa eveniet tempore. Excepturi vero quae culpa
        similique officia nulla! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero nihil cumque inventore atque obcaecati fugiat
        fugit dolores, dicta a, porro non temporibus. Voluptatum eos vero
        laudantium non laborum in officiis?
      </p>
    </div>
  );
}

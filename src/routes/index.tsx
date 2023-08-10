import Button from '@suid/material/Button';
import { createSignal } from 'solid-js';

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <main>
      <Button variant="contained" onClick={() => setCount(count() + 1)}>
        Clicks1111: ${count()}
      </Button>

      <Button variant="contained" onClick={() => setCount(count() + 1)}>
        {`Clicks1111: ${count()}`}
      </Button>
    </main>
  );
}

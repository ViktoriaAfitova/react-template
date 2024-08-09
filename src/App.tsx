import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='title'>Awesome React Template</h1>
      <p>
        Opinionated React Template with ESLint, Prettier and TypeScript
        configured
      </p>
      <div className='card'>
        <button
          type='button'
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          count is {count}
        </button>
        <p>
          Start creating your awesome project by editing{' '}
          <code>src/App.tsx</code>
        </p>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import RootSelect from './components/RootSelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Demo app based on Star Wars API</header>
      <article>
        <RootSelect />
      </article>
      <footer></footer>
    </div>
  );
}

export default App;

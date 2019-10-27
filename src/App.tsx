import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar';

const App: React.FC = () => {


  return (

    <div className="root">
      <MenuBar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
          Learn React
      </a>
    </div>
  );
};

export default App;

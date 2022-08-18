import React, { FC } from 'react';
import ActionButton from './components/Button';
import Tictactoe from './components/TictactoeBoard';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <ActionButton 
        buttonText= "Print Me!"
      />
      <Tictactoe />
    </div>
  );
};

export default App;

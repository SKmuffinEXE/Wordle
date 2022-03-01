import Keyboard from './components/Keyboard';
import { useState } from 'react';
import './App.css';
import Guesses from './components/Guesses';

function App() {

  const [userGuesses, setUserGuesses] = useState(1)
  const guesses = 6
  let answer = "Vixen"

  const guess = (attempt) => {
      //if a letter is in the correct area, make the square green
      //check if letter is even in the word, if so, make yellow
      //if letter is used twice, but there's only 1 of it, turns grey
      //else, turn grey

  }





  return (
    <div className="App">
      <header className="App-header">
        David's Wordle
      </header>
      <Guesses id = "1"/>
      <Guesses id = '2'/>
      <Guesses id = '3'/>
      <Guesses id = '4'/>
      <Guesses id = '5'/>
      <Guesses id = '6'/>
    <Keyboard/>
    </div>
  );
}

export default App;

import Keyboard from './components/Keyboard';
import WordList from './Wordlist';
import { useState } from 'react';
import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';

function App() {
  const [guess, setGuess] = useState([])
  const [slots, setSlots] = useState(0)
  const [attempts, setAttempts] = useState(0)
  let answer = "Vixen"

  function checker(word) {

  }





  return (
    <div className="App">
      <header className="App-header">
        David's Wordle
      </header>
      <Guesses guess = {guess}/>
      <Keyboard slots = {slots} setSlots = {setSlots} setGuess ={setGuess} guess = {guess}/>

    </div>
  );
}

export default App;

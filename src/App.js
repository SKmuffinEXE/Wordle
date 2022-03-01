import { commputeGuess, getRandomWord } from './components/utils';
import { letterStates } from './components/utils';
import { useState } from 'react';
import './App.css';
import WordRow from './components/WordRow';
import Rows from './Rows';

function App() {

// const [answer, setAnswer]  = useState(getRandomWord)
const [answer, setAnswer]  = useState("worse")  //test case
const [guess, setGuess] = useState("video") //test case


  function checker(word) {

  }

  //console.log(getRandomWord())
// console.log(answer)
// console.log(guess)
// console.log(commputeGuess(guess, answer))

  return (
    <div className="App">
      <header className="App-header">
        David's Wordle
      </header>
      <Rows answer = {answer}/>
  
      
      {/* <Guesses guess = {guess}/>
      <Keyboard slots = {slots} setSlots = {setSlots} setGuess ={setGuess} guess = {guess}/> */}

    </div>
  );
}

export default App;

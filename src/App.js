import { useState } from 'react';
import { getRandomWord } from './components/utils';
import './App.css';
import Rows from './Rows';
import { Input } from './components/Input';

function App() {

const [answer, setAnswer]  = useState(getRandomWord)
// const [answer, setAnswer]  = useState("worse")  //test case
const [guess, setGuess] = useState("") //test case

  return (
    <div className="App">
      <header className="App-header">
        David's Wordle
      </header>
      <Rows answer = {answer}/>
      <Input guess = {guess} setGuess = {setGuess}/>
  
      
      {/* <Guesses guess = {guess}/>
      <Keyboard slots = {slots} setSlots = {setSlots} setGuess ={setGuess} guess = {guess}/> */}

    </div>
  );
}

export default App;

import { useState } from 'react';
import { getRandomWord } from './components/utils';
import './App.css';
import Rows from './Rows';
import { Input } from './components/Input';

function App() {

const [answer, setAnswer]  = useState(getRandomWord)
// const [answer, setAnswer]  = useState("worse")  //test case
const [attempts, setAttempts] = useState(0)
const [guess, setGuess] = useState("") //test case
const [guesses, setGuesses] = useState([])
const [win, setWin] = useState(false)

function addGuess(){
  console.log("hit")
  if(attempts < 6){
  setAttempts(attempts => attempts+1)
  setGuesses([...guesses, guess])}
}


  return (
    <div className="App">
      <header className="App-header">
        David's Wordle
      </header>
      {attempts < 6 ? `Attempts left: ${6 - attempts}` : "Game Over"}
      <Rows answer = {answer} guesses = {guesses} setWin = {setWin}/>
      <Input  guess = {guess} setGuess = {setGuess} add = {addGuess}/>


    </div>
  );
}

export default App;

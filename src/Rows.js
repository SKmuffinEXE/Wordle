
import WordRow from "./components/WordRow"
import { useState } from "react"

export default function Rows({answer, guesses, setWin}){
  
    
return(
    <div>
        {guesses.map(g => <WordRow letters = {g} answer = {answer} setWin = {setWin}/>)}
      {/* <WordRow letters = {guess} answer = {answer}/> */}
      {/* <WordRow letters = {secondGuess}  answer = {answer}/>
      <WordRow letters = {thirdGuess} answer = {answer}/>
      <WordRow letters = {fourthGuess} answer = {answer}/>
      <WordRow letters = {fifthGuess} answer = {answer}/>
      <WordRow letters = {sixthGuess} answer = {answer}/> */}
    </div>
)

}
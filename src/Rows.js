
import WordRow from "./components/WordRow"
import { useState } from "react"

export default function Rows({answer}){
    const [guess,setGuess] = useState()
    const [currentGuess, setCurrentGuess] = useState(0)
    const [firstGuess, setFirstGuess] = useState("")
    const [secondGuess, setSecondGuess] = useState("")
    const [thirdGuess, setThirdGuess] = useState("")
    const [fourthGuess, setForthGuess] = useState("")
    const [fifthGuess, setFifthGuess] = useState("")
    const [sixthGuess, setSixthGuess] = useState("")
    
return(
    <div>
      <WordRow letters = {firstGuess} answer = {answer}/>
      <WordRow letters = {secondGuess}  answer = {answer}/>
      <WordRow letters = {thirdGuess} answer = {answer}/>
      <WordRow letters = {fourthGuess} answer = {answer}/>
      <WordRow letters = {fifthGuess} answer = {answer}/>
      <WordRow letters = {sixthGuess} answer = {answer}/>
    </div>
)

}
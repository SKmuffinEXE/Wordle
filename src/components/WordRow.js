import CharBox from "./CharBox";
import { commputeGuess } from "./utils";

export default function WordRow({letters = "", answer}){
    const letter_length = 5;
    const lettersRemaing = letter_length - letters.length
    const current = letters.split('').concat(Array(lettersRemaing).fill(''))
 
    const guessStates = commputeGuess(letters, answer) 
    console.log(letters + guessStates)
    return (
        <div>
            {current.map((char,index) => (<CharBox key ={char} letter = {char} guessState = {guessStates[index]}/>))}

        </div>
    )
}
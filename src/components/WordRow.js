import CharBox from "./CharBox";
import { commputeGuess } from "./utils";

export default function WordRow({letters = "", answer, setWin}){
    const letter_length = 5;
    const lettersRemaing = letter_length - letters.length
    const current = letters.split('').concat(Array(lettersRemaing).fill(''))
 
    const guessStates = commputeGuess(letters, answer) 
    // console.log(letters + guessStates)
    // if(guessStates = (2,2,2,2,2)) {setWin(true)}
    return (
        <div>
            {current.map((char,index) => (<CharBox key ={char} letter = {char} guessState = {guessStates[index]}/>))}

        </div>
    )
}
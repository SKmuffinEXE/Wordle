import { useState } from "react"
import WordList from "../Wordlist"

export function Input({guess, setGuess}){
const [bad, setBad] = useState(false)

function handleSubmit(e) {
    e.preventDefault();
    if(!WordList.includes(guess.toLowerCase())){
        console.log("You fucked up")
        setBad(true)
    }
    else{
        console.log("This is a word")
        setBad(false)
    }
}


    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "text" pattern="[A-Za-z]{5}" maxLength={5} onChange={(e) => setGuess(e.target.value)} value = {guess}></input>
                <button type="submit" 
                onSubmit={(e) => handleSubmit()}
                >
            Submit
          </button>
            </form>
            {bad? "Word not in database" : ""}

        </div>
    )
}
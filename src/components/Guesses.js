import { useState } from "react"


export default function Guesses({guess}){
    const [firstClass, setFirstClass] = useState("Keyboard-tile unused")


    return(
        <div>
            <div class = "Keyboard">
            <div class = "Keyboard-tile">{guess[0]}</div>
            <div class = "Keyboard-tile">{guess[1]}</div>
            <div class = "Keyboard-tile">{guess[2]}</div>
            <div class = "Keyboard-tile">{guess[3]}</div>
            <div class = "Keyboard-tile">{guess[4]}</div>           
        </div>
        </div>

    )
}
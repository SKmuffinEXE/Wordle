import { useState } from "react"


export default function Guesses({guess}){
    const [first, setFirst] = useState(guess[0])
    const [second, setSecond] = useState(" ")
    const [third, setThird] = useState(" ")
    const [fourth, setFouth] = useState(" ")
    const [fifth, setFifth] = useState(" ")


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
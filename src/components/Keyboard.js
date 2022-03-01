export default function Keyboard({slots, setSlots, setGuess, guess}){

    const returnKey = (s) => {

        //send s back to app
        if(slots < 5){
        setGuess([...guess, s])
        setSlots(slots = slots + 1)
    }
        
    }
    const OnSubmit = () => {
        //submits whole word
        console.log("Submit")
    }

    const OnDel = () => {
        //deletes a letter off guess
        console.log("Delete")
        if(slots > 0){
            console.log("works!")
        }

    }

 return(
<div>
    <div class = "Keyboard">
            <div class = "Keyboard-tile" onClick={() => returnKey("Q")}>Q</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("W")}>W</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("E")}>E</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("R")}>R</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("T")}>T</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("Y")}>Y</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("U")}>U</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("I")}>I</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("O")}>O</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("P")}>P</div>
        </div>
        <div class = "Keyboard">
            <div class = "Keyboard-tile"onClick={() => returnKey("A")}>A</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("S")}>S</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("D")}>D</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("F")}>F</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("G")}>G</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("H")}>H</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("J")}>J</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("K")}>K</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("L")}>L</div>
        </div>
        <div class = "Keyboard">
            <div class = "Keyboard-tile" onClick ={() => OnDel()}>{"<-"}</div>
            <div class = "Keyboard-tile" onClick={() => returnKey("Z")}>Z</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("X")}>X</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("C")}>C</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("V")}>V</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("B")}>B</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("N")}>N</div>
            <div class = "Keyboard-tile"onClick={() => returnKey("M")}>M</div>
            <div class = "Keyboard-tile" onClick ={() => OnSubmit()}>{">"}</div>
        </div>
</div>
 )
    
}
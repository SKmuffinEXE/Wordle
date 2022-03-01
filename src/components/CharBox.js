export default function CharBox({letter, guessState}){
    let colorState;

    if(guessState===2 ){
        colorState = 'Correct'
    }
    else if(guessState === 1){
        colorState = 'Semi-Correct'
    }
    else{
        colorState= 'Wrong'
    }

    return(
        <div className = {`Charbox ${colorState}`}>
            {letter}
        </div>
    )    
}

/**test code here
 {current.map((char) => (<CharBox letter = {char}/>))}
 
 */
import { useState } from "react"

export default function Input(){
    const [attempt, setAttempt] = useState()

    function onSubmit(e){
        e.preventDefault()

    }

    return(
        <div>
            <form>
            Answer: <input
            type = "text"
            value = {attempt}
            onChange = {(e) => setAttempt(e.target.value)}
            ></input>
            <button> Submit</button>
            </form>
        </div>
    )
}
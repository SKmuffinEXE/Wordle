
import WordRow from "./components/WordRow"

export default function Rows({answer}){

return(
    <div>
    <WordRow letters = "adieu" answer = {answer}/>
      <WordRow letters = "story"  answer = {answer}/>
      <WordRow letters = "plank" answer = {answer}/>
      <WordRow letters = "sorce" answer = {answer}/>
      <WordRow letters = "horse" answer = {answer}/>
      <WordRow letters = "worse" answer = {answer}/>
    </div>
)

}
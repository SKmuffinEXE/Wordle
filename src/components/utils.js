import WordList from "../Wordlist"

export function getRandomWord(){
    const randomWord = Math.floor(Math.random() * WordList.length)
    return WordList[randomWord]
  }
// 0 no matches at all
// 1 the letter is in the word
// 2 the letter is in the RIGHT place
 export function commputeGuess(guess, answer){
    const guessArray = guess.split('')
    const answerArray = answer.split('');
    const result = [0, 0, 0, 0, 0]
    for(let x = 0; x<answerArray.length; x++){
    const guessLetter = guessArray[x]
    const answerLetter = answerArray[x]
    if(guessLetter === answerLetter){
        result[x] = 2
    }
    else if(answerArray.includes(guessLetter)){
        result[x] = 1
    }
    }
    return result
 }
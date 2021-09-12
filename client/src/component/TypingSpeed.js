import SetTimer from './SetTimer.js'
import './TypingSpeed.css'
import Game from './Game.js'
import axios from 'axios'
import { useState } from 'react'


function TypingSpeed() {
  const [paragraphs, setParagraphs] = useState([])
  const [userInput, setUserInput] = useState([])
  const [timerVisibility, setTimerVisibility] = useState(false)
  const [gameVisibility, setGameVisibility] = useState(true)
  const [inaccuracteCount, setInaccurateCount] = useState(0)

  function getParagraphs(amount) {
    axios.get(`/api/paragraphs/${amount}`)
      .then(res => {
        const array = res.data.map(obj => obj.paragraph)
        // join to create 1 string, split to create an array with each 1 item as each string
        setParagraphs(array.join(' ').split(''))
      })
      .then(setTimerVisibility(true), setGameVisibility(false))
  }

  function start(e) {
    // time function
    const newValue = e.target.value.split('')
    setUserInput(newValue)

    // change color
    newValue.map((letter, i) => {
      if (e.nativeEvent.inputType === 'insertText') {
        letter != paragraphs[i] ? setInaccurateCount(inaccuracteCount + 1) : setInaccurateCount(inaccuracteCount)
      }
    })

  }

  return (
    <div className='TypingSpeed'>
      <h1>React Typing Speed</h1>
      <SetTimer getParagraphs={getParagraphs} visibility={timerVisibility} />
      <Game paragraphs={paragraphs} userInput={userInput} visibility={gameVisibility} start={start} inaccuracteCount={inaccuracteCount} />
    </div>
  )
}

export default TypingSpeed
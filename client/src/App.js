import './App.css';
import { useState } from 'react'
import SetMinutes from './component/SetMinutes.js'
import TextArea from './component/TextArea.js'
import Countdown from "./component/Countdown"
import axios from 'axios'
import styled from 'styled-components'
import Statistics from './component/Statistics'

const Section = styled.section`
  text-align: -webkit-center;
  position: relative;
  top: -60px;
`

const H1 = styled.h1`
  color: var(--chocolate);
  margin: 0;
  font-size: 17em;
  font-family: 'Abril Fatface';
  font-weight: 200;
`

const H2 = styled.h2`
  color: var(--chocolate);
  margin: 0;
  font-size: 4em;
  font-family: 'Abril Fatface';
  font-weight: 200;
  letter-spacing: 49px;
  position: relative;
  top: -70px;
`

const Div = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 260px;
`
const BottomDiv = styled.div`
  position: relative;
  left: 0;
  right: 0;
  bottom: -350px;
  z-index: -1;
`

function App() {
  const defaultStats = {
    wpm: 0,
    accuracy: 0
  }
  // State for typing section
  const [paragraphs, setParagraphs] = useState([])
  const [userInput, setUserInput] = useState([])

  // State for visibility components
  const [minutesDisplay, setMinutesDisplay] = useState(true)
  const [textAreaDisplay, setTextAreaDisplay] = useState(false)
  const [statsDisplay, setStatsDisplay] = useState(false)

  // State for inacuracy count
  const [inaccuracteCount, setInaccurateCount] = useState(0)

  // State for countdown
  const [seconds, setSeconds] = useState(null)
  const [min, setMin] = useState(0)
  const [isTimerOn, setIsTimerOn] = useState(false)

  const [intervalId, setIntervalId] = useState(null)

  const [statistics, setStatistics] = useState(defaultStats)

  function getParagraphs(min) {
    const amount = {
      1: 5,
      3: 20,
      5: 30
    }
    axios.get(`/api/paragraphs/${amount[min]}`)
      .then(res => {
        const array = res.data.map(responseObj => responseObj.paragraph)
        // join to create 1 string, split to create an array with each 1 item as each string
        setParagraphs(array.join(' ').split(''))
      })
      .then(setMinutesDisplay(false), setTextAreaDisplay(true)) // TODO check if i can use switch feature?
      .then(setSeconds(min * 60), setMin(min))
  }

  function handleUserInput(e) {
    const newValue = e.target.value.split('')
    setUserInput(newValue)

    let startTime = seconds
    if (!isTimerOn && seconds > 0) {
      // declaring the TIME state into a new variable and mutate that instead => read up on CLOSURES
      let id = setInterval(() => {
        startTime--
        setSeconds(startTime)
      }, 1000)
      setIsTimerOn(true)
      setIntervalId(id)
    }

    // increment inaccurate amount
    newValue.forEach((letter, i) => {
      if (e.nativeEvent.inputType === 'insertText') {
        letter !== paragraphs[i] ? setInaccurateCount(inaccuracteCount + 1) : setInaccurateCount(inaccuracteCount)
      }
    })

    const allSpanLetter = document.querySelectorAll('.letter')
    const currentInputLocation = allSpanLetter[userInput.length].getBoundingClientRect().right
    const nextInputLocation = allSpanLetter[userInput.length + 1].getBoundingClientRect().right

    if (currentInputLocation > nextInputLocation) {
      document.querySelector('.paragraphs').scrollTop += 46
    }
  }

  if (intervalId != null) {
    if (seconds === 0) {
      end()
    }
  }

  function end() {
    clearInterval(intervalId)
    setIntervalId(null)
    setIsTimerOn(false)
    setSeconds(null)
    setParagraphs([])
    setUserInput([])
    setInaccurateCount(0)
    document.querySelector('textarea').value = null
    setStatistics({
      wpm: (userInput.length / 5) / min,
      accuracy: (userInput.length - inaccuracteCount) / userInput.length
    })
    setStatsDisplay(true)
    setTextAreaDisplay(false)
    setMin(0)
  }

  return (
    <Section>
      <H1>TYPING</H1>
      <Div className='content-container'>
        <SetMinutes
          getParagraphs={getParagraphs}
          btnDisplay={minutesDisplay}
        />
        <TextArea
          paragraphs={paragraphs}
          userInput={userInput}
          typingDisplay={textAreaDisplay}
          handleUserInput={handleUserInput}
          inaccuracteCount={inaccuracteCount}
        />
        <Statistics
          statistics={statistics}
          statsDisplay={statsDisplay}
          setMinutesDisplay={setMinutesDisplay}
          setStatsDisplay={setStatsDisplay}
        />
      </Div>
      <BottomDiv>
        <H1>SPEED</H1>
        <H2>TEST</H2>
        <Countdown
          seconds={seconds}
          isTimerOn={isTimerOn}
        />
      </BottomDiv>
    </Section>
  )
}

export default App;
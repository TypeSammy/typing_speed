import { useState } from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  color: var(--moss);
  margin: 0;
  font-size: 5em;
  font-family: 'Abril Fatface';
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  background: var(--khaki);
  border-radius: 3em 1em 3em 1em;
  color: rgb(255 255 255);
  height: 500px;
  padding: 30px;
  flex-direction: column;
`

const Input = styled.input`
  width: 200px;
  align-self: center;
  padding: 10px;
  border: none;
  border-radius: 16px;
  background: var(--beige);
  height: 20px;
  width: 362px;
  text-align: center;
  font-size: 1.2em;
  padding: 17px;
  ::placeholder {
    color: rgb(145, 170, 157);
  }
`

const Button = styled.button`
  font-family: 'Lato',sans-serif;
  border: none;
  margin: 0.5em;
  background: var(--moss);
  width: 12em;
  height: 3em;
  border-radius: 15px;
  color: rgb(255 255 255);
  font-size: 1em;
  align-self: center;
  &:hover {
    background: none;
    border: solid 1.5px var(--moss);
  }
`

const Highlight = styled.span`
  color: var(--chocolate);
  border: none;
  font-size: 1.5em;
`

function Statistics({ statistics, statsDisplay, setMinutesDisplay, setStatsDisplay }) {
  // const [userName, setUserName] = useState(null)
  const accuracy = statistics.accuracy < 1 ? statistics.accuracy.toFixed(2).slice(2) : 100
  let randomName = 'bob'
  if (statistics.wpm != 0) {
    randomName = `User_${Math.floor(Math.random() * 4000)}`
  }
  // setUserName('randomName')

  const submit = () => {
    // capture userName and send into database
    // re-render leaderboard with an axios request?
  }

  const again = () => {
    setMinutesDisplay(true)
    setStatsDisplay(false)
  }

  return (
    <Div id={statsDisplay ? null : 'hidden'}>
      <H2>Time's up!</H2>
      <p>You typed with <Highlight>{statistics.wpm}</Highlight> WPM with <Highlight>{accuracy}%</Highlight> accuracy.</p>
      <Input className='username' placeholder={randomName} ></Input>
      <span>
        <Button onClick={submit}>Submit your score</Button>
        <Button onClick={again}>Try again</Button>
      </span>
    </Div>
  )
}

export default Statistics
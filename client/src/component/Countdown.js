import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: center;
  color: var(--moss);
  font-size: 1.3em;
  width: 50%;
  gap: 10px;
  margin: 22px auto;
  letter-spacing: 3px;
  border-top: 1px solid var(--moss);
  border-bottom: 1px solid var(--moss);
  padding: 0.5em;
`

const P = styled.p`
  color: var(--moss);
`

function Countdown({ seconds, isTimerOn }) {
  let displayMinutes = Math.floor(seconds / 60)
  let displaySeconds = seconds % 60

  return (
    <Div >
      <P>Timer </P>
      <P>0{displayMinutes}:{displaySeconds === 0 ? '00' : displaySeconds}</P>
    </Div>
  )
}

export default Countdown

// id={isTimerOn ? null : 'hidden'}
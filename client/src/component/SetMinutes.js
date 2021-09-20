import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Lato',sans-serif;
  border: none;
  margin: 0.5em;
  background: var(--moss);
  width: 23%;
  height: 13%;
  border-radius: 15px;
  color: rgb(255 255 255);
  font-size: 1em;
  &:hover {
    background: none;
    border: solid 1.5px var(--moss);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--khaki);
  height: 500px;
  border-radius: 3em 1em 3em 1em;
`

function SetMinutes({ getParagraphs, btnDisplay }) {
  return (
    <Div className='SetTimerBtn' id={btnDisplay ? null : 'hidden'}>
      <Button onClick={() => getParagraphs(1)}>1 Minute</Button>
      <Button onClick={() => getParagraphs(3)}>3 Minutes</Button>
      <Button onClick={() => getParagraphs(5)}>5 Minutes</Button>
    </Div>
  )
}

export default SetMinutes
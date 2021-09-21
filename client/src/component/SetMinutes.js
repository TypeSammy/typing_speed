import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Lato',sans-serif;
  border: none;
  margin: 0.5em;
  background: var(--moss);
  width: 33%;
  height: 13%;
  border-radius: 15px;
  color: rgb(255 255 255);
  font-size: 1em;
  font-weight: 600;
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
  height: 610px;
  border-radius: 3em 1em 3em 1em;
  width: 600px;
  flex-direction: column;
`

function SetMinutes({ getParagraphs, btnDisplay }) {
  return (
    <Div className='SetTimerBtn' id={btnDisplay ? null : 'hidden'}>
      <Button onClick={() => getParagraphs(1)}>ONE MINUTE</Button>
      <Button onClick={() => getParagraphs(3)}>THREE MINUTES</Button>
      <Button onClick={() => getParagraphs(5)}>FIVE MINUTES</Button>
    </Div>
  )
}

export default SetMinutes
import styled from 'styled-components'

const Div = styled.div`
  background: var(--moss);
  margin-top: 20px;
  padding-top: 20px;
  border-radius: 50px 50px 0px 0px;
  padding-bottom: 50px;
`

const H2 = styled.h2`
  color: white;
  font-family: 'Abril Fatface';
  margin: 0;
  padding-top: 0.3em;
  font-size: 3em;
  font-family: 'Abril Fatface';
`
const Table = styled.table`
  border-collapse: collapse;
  width: 58%;
  margin-top: 10px;
`
const Th = styled.th`
  padding: 7px;
  background: rgb(255 255 255);
  color: var(--moss);
  text-align: left;
`

const Td = styled.td`
  padding: 7px;
  border: 1px solid white;
  color: white;
  font-size: 0.9em
`

function Leaderboard({ leaderData }) {
  return (
    <Div className='Leaderboard'>
      <H2>LEADER BOARD</H2>
      <Table>
        <thead>
          <tr>
            <Th>Username</Th>
            <Th>Wpm</Th>
            <Th>Accuracy</Th>
          </tr>
        </thead>
        <tbody>
          {leaderData.map((leaderObject, index) => (
            <tr key={index + leaderObject.username}>
              <Td>{leaderObject.username}</Td>
              <Td>{leaderObject.wpm}</Td>
              <Td>{leaderObject.accuracy}%</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  )
}

export default Leaderboard
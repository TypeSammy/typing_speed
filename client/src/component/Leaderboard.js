function Leaderboard({ leaderData }) {
  return (
    <div className='Leaderboard'>
      <h1>Scoreboard here</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Wpm</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {leaderData.map((leaderObject, index) => (
            <tr key={index + leaderObject.username}>
              <td>{leaderObject.username}</td>
              <td>{leaderObject.wpm}</td>
              <td>{leaderObject.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Leaderboard
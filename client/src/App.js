import './App.css';
import { useState, useEffect } from 'react'
import Leaderboard from './component/Leaderboard'
import TypingSpeed from './component/TypingSpeed'
import axios from 'axios'

function App() {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    axios.get('/api/leaderboard')
      .then(res => setLeaderboard(res.data))
  }, [])

  return (
    <div className="App">
      <TypingSpeed />
      <Leaderboard leaderData={leaderboard} />
    </div>
  );
}

export default App;
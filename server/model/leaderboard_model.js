const db = require('../db/db')

function fetchLeaderboard() {
  const sql = `
    SELECT * FROM scoreboard ORDER BY wpm DESC LIMIT 2;
  `
  return db.query(sql)
    .then(res => {
      return res.rows
    })
}

module.exports = fetchLeaderboard
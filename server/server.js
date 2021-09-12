const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())

const paragraphsController = require('./controllers/paragraphs_controller.js')
const leaderboardController = require('./controllers/leaderboard_conroller')

app.use('/api/paragraphs', paragraphsController)
app.use('/api/leaderboard', leaderboardController)

app.listen(PORT, () => {
  console.log(`*** Listening on port ${PORT} ***`)
})
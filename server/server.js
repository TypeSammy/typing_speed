const express = require('express')
const app = express()
const PORT = process.env.PORT || (process.env.NODE_ENV === 'production' && 3000) || 3001
const path = require('path')
app.use(express.json())

const paragraphsController = require('./controllers/paragraphs_controller.js')

app.use('/api/paragraphs', paragraphsController)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`*** Listening on port ${PORT} ***`)
})
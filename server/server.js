const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())

const paragraphsController = require('./controllers/paragraphs_controller.js')

app.use('/api/paragraphs', paragraphsController)

app.listen(PORT, () => {
  console.log(`*** Listening on port ${PORT} ***`)
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
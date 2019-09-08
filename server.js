const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())

// For production
if(process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static(path.join(__dirname, 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`server started at port ${port}`))
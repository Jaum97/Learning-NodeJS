const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Henlooooo')
})

app.listen(3001)

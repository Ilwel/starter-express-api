const express = require('express')
const { jobs } = require('./jobs')
const app = express()

jobs()

app.all('/', async (req, res) => {
  res.send('🦖 jobs called')
})
app.listen(process.env.PORT || 3000)
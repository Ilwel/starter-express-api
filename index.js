const express = require('express')
const { jobs } = require('./jobs')
const app = express()


app.all('/', async (req, res) => {
  jobs()
})
app.listen(process.env.PORT || 3000)
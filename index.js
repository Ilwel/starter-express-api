const express = require('express')
const { jobs } = require('./jobs')
const app = express()
jobs()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)
const { reqHeirs } = require("./req.heirs")
var cron = require('node-cron');

const jobs = () => {
  cron.schedule('*/10 * * * *', reqHeirs)
}

module.exports = {
  jobs
}
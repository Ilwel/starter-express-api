const { reqHeirs } = require("./req.heirs")
var cron = require('node-cron');

const jobs = () => {
  cron.schedule('*/30 * * * * *', reqHeirs)
}

module.exports = {
  jobs
}
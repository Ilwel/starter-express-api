const { default: axios } = require('axios');

const api = 'https://heirs.onrender.com/'

const reqHeirs = () => {
  axios.get(api).then((res) => console.log(res)).catch((err) => console.log(err))
}

module.exports = {
  reqHeirs
}
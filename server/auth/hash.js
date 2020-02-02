
const bcrypt = require('bcrypt')

function generatePasswordHash (password) {
  return bcrypt.hash(password, 12)
}

function comparePasswordToHash (password, hash) {
  console.log(hash)
  console.log(password)
  return bcrypt.compare(password, hash)
}

module.exports = {
  generatePasswordHash,
  comparePasswordToHash,
}
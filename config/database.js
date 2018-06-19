if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://hacktor:hacktor1@ds163630.mlab.com:63630/vidjot-prod-hacktor'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}

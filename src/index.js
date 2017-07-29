const express = require('express')
const app = express()
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

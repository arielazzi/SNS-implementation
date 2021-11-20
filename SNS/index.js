var express = require('express')
var app = express()
const sns = require('./src/sns');


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

sns.createTopic();

import express from 'express'
var app = express()
import { listTopics, publishMessage } from '../SNS/src/sns.js';


app.get('/', function (req, res) {
  res.send('meteorology!')
})

app.get('/chuva', async function (req, res) {
  try {
    await publishMessage('chuva')
    res.send('Mensagem publicada com sucesso!')
  } catch (err) {
    console.log("Error", err.stack);
  }
})

app.get('/tornado', async function (req, res) {
  await publishMessage('tornado')
  res.send('Mensagem publicada com sucesso!')
})

app.get('/tsunami', async function (req, res) {
  await publishMessage('tsunami')
  res.send('Mensagem publicada com sucesso!')
})

app.get('/meteoro', async function (req, res) {
  await publishMessage('meteoro')
  res.send('Mensagem publicada com sucesso!')
})



app.get('/tsunami', async function (req, res) {
  res.send(await listTopics())
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
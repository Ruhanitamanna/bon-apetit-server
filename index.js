const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const data = require('./data/data.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/data', (req, res)=>{
    res.send(data);
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
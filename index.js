const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const data = require('./data/data.json')

app.use(cors())

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'none'; script-src 'self' https://vercel.live;");
    next();
  });
  

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/data', (req, res)=>{
    res.send(data);
  })

  app.get('/data/:id', (req,res)=>{
    const id = req.params.id
    const selectedRecipe = data.find(r => r.id === id)
    res.send(selectedRecipe)
    
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
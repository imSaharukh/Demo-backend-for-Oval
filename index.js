const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.post('/generate', (req, res) => {

   const {string , letterToRemove} = req.body;

   const result = string.replaceAll(letterToRemove,"")
  res.send({result})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');


app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.post('/generate', (req, res) => {


  console.log(req.body);
   const {string , letterToRemove} = req.body;

   if(!string){
   return res.status(400). send({error: 'Please provide a string'});
   }
   if(!letterToRemove){
    return res.status(400). send({error: 'Please provide a letter to remove'});
   }


   const result = string.replaceAll(letterToRemove,"")
  res.send({result})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
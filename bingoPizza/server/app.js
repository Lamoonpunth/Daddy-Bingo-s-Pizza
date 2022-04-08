const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const dotenv = require('dotenv')
dotenv.config();
require('./user');

app.use(bodyParser.json())

const User = mongoose.model("user");

const mongoUri = process.env.DBURL;

mongoose.connect(mongoUri,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo instance");
})
mongoose.connection.on("error",(err)=>{
    console.log("Error connecting to mongo",err);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.post('/send',(req,res)=>{
  console.log(req.body)
  res.send("posted")
})
app.post('/send-data',(req,res) =>{
  const user = new User({
    username:req.body.username,
    password:req.body.password
  })
  user.save()
  .then(data => {
    console.log(data)
    res.send("success")
  }).catch(err => {
    console.log(err)
  })
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


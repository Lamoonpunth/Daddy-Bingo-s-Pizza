//import 
require('./model/user');
require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json())

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const crypto = require('crypto-js');
const multer = require('multer');
const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
dotenv.config();



app.use(bodyParser.json())
const User = mongoose.model("user");
const mongoUri = process.env.DBURL;
  //mongodb connection
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
  //---------------------------------------------------------------------
 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
  //---------------------------------------------------------------------




app.post('/send',(req,res)=>{
  console.log(req.body)
  res.send("posted")
})

//Register
app.post('/register',async(req,res) =>{
  try{
      //Get user input
    const {username,password,fname,lname,phonenumber,
      birthdatem,birthdatey,sex,address,province,
      district,subdistrict,postcode} = req.body;
    //Encrypt user password+salt
    const Salts = crypto.lib.WordArray.random(128/8);  
    encryptedPassword = await SHA256(password+Salts);

    //Create user in database
    const user = await User.create({
      username:username,
      password:encryptedPassword,
      fname:fname,
      lname:lname,
      phonenumber:phonenumber,
      birthdatem:birthdatem,
      birthdatey:birthdatey,
      sex:sex,
      address:address,
      province:province,
      district:district,
      subdistrict:subdistrict,
      postcode:postcode,
      salt :Salts
    })
    // Create token 
      const token = jwt.sign(
        { user_id:user._id, username:username},
        process.env.TOKEN_KEY,
        { 
          expiresIn: '1h'   
        }
      )
    // save user token
    user.token = token;
    console.log('register success')
    //return new user
    res.status(201).json(user);
  }
  catch(err){
    console.log(err);
  }
  

});
  


app.post('/login', async(req,res) => {
  try{
    //Get user input
    const {username,password} = req.body;
    //Validate user input
      if (!username || !password) {
        return res.status(400).send("Please enter username and password");
      }
    //Find user in database
    const user = await User.findOne({username:username});
    if (user && (await SHA256 (password+user.salt).toString() === user.password)) {
      //Create token
      const token = jwt.sign(
        { user_id:user._id, username:username},
        process.env.TOKEN_KEY,
        { 
          expiresIn: '1h'   
        }
      )
      //save user token
      user.token = token;
      //return new user
      res.status(200).json(user);
    }
    else{
      res.status(400).json("Invalid username or password");
    }   
  }catch(err){
    console.log(err);
  }

});

app.post('/welcome',auth,(req,res)=>{
  res.status(200).send("Welcome");
})

//usercheck before register
app.post('/usercheck', (req,res) => {
  User.findOne({username: req.query.username}, function(err, user){
      if(err) {
        console.log(err)
      }
      var message;
      if(user) {
        console.log(user)
          message = "user exist"
          console.log(message)
      } else {
          message= "user doesn't exist"
          console.log(message)
      }
      res.json(message)
  });
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null,Date.now()+'_'+file.originalname);
  }
});



const upload = multer({storage: fileStorageEngine});
app.post('/uploadSingle', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Uploaded');
});
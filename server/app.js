//import 
require('./model/user');
require('./model/user-admin')
require('./model/menu')
require('./model/appetizer')
require('./model/order')
require('./model/recommend')
require('./model/pizzaoption')
require('./model/user-rider')
require('./model/user-chef')
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
const Admin= mongoose.model("user-admin")
const Menu = mongoose.model("menu")
const Appetizer = mongoose.model("appetizer")
const Order = mongoose.model("order")
const Recommend = mongoose.model("recommend")
const Pizzaoption = mongoose.model("pizzaoption")
const Rider = mongoose.model("user-rider")
const Chef = mongoose.model("user-chef")
const mongoUri = process.env.DBURL;
  //mongodb connection
mongoose.connect(mongoUri,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongo instance");
    salt = crypto.lib.WordArray.random(128/8)
})
mongoose.connection.on("error",(err)=>{
    console.log("Error connecting to mongo",err);
})
  //--------------------------------------------------------------------- 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
  //---------------------------------------------------------------------

  //serveronlinecheck
  app.post('/online',(req,res)=>{
    console.log("online naniiii")
    res.json("online nannnii")
  })


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
      res.status(200).json(user._id);
    }
    else{
      res.status(400).json("Invalid username or password");
    }   
  }catch(err){
    console.log(err);
  }

});


  // app.post('/carttoorder',async(req,res) => {
  //   const username = req.body.username
  //   const item = req.body.item
  //   const user = await User.findOne({username:username});
  //   console.log(user)
  //   res.json(user)
  // })

//add menu from adminApp
app.post('/addmenu',async(req,res) =>{
  try{
    //img_path from upload single
    const {name,type,price,ingr_need,description,img_path} = req.body;
    const menu = await Menu.create({
      name:name,
      type:type,
      price:price,
      ingr_need:ingr_need,
      description:description,
      img_path:img_path
    })
    res.json(menu)
  }

  catch(err){
    console.log(err)
  }
})

//addpizzaoption
app.post('/addpizzaoption',async(req,res) =>{
  try{
    //img_path from upload single
    const {name,type,price,img_path,extra} = req.body;
    const pizzaoption = await Pizzaoption.create({
      name:name,
      type:type,
      price:price,
      img_path:img_path,
      extra:extra
    })
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getTopping',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Topping"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getSize',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Size"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getDough',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Dough"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getCrust',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Crust"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getSauce',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Sauce"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getPackage',async(req,res) =>{
  try{
    const pizzaoption = await Pizzaoption.find({type:"Package"})
    res.json(pizzaoption)
  }
  catch(err){
    console.log(err)
  }
})

//addpresetpizza
app.post('/addpizza',async(req,res) =>{
  try{
    //img_path from upload single
    const {name,price,img_path,size,dough,crust,sauce,package} = req.body;
    const menu = await Menu.create({
      name:name,
      type:"pizza",
      price:price,
      ingr_need:null,
      description:"topping:"+name+" size:"+size+" dough:"+dough+" crust:"+crust+" sauce:"+sauce+" package:"+package,
      img_path:img_path,
      size: size,
      dough: dough,
      crust: crust,
      sauce: sauce,
      package: package      
    })
    res.json(menu)
  }
  catch(err){
    console.log(err)
  }
})

app.post('/adduserpizza',async(req,res) =>{
  try{
    //img_path from upload single
    const {name,price,img_path,size,dough,crust,sauce,package} = req.body;
    const menu = await Menu.create({
      name:name,
      type:"userPizza",
      price:price,
      ingr_need:null,
      description:"topping:"+name+" size:"+size+" dough:"+dough+" crust:"+crust+" sauce:"+sauce+" package:"+package,
      img_path:img_path,
      size: size,
      dough: dough,
      crust: crust,
      sauce: sauce,
      package: package      
    })
    res.json(menu)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getmenu',async(req,res)=>{
  try{
    const menu = await Menu.find({})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/getAppetizer',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"appetizer"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getPasta',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"pasta"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getDrink',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"drink"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getDessert',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"dessert"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getAlacarte',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"À la carte"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getID',async(req,res)=>{
  console.log(req.query)
  try{
    const menu = await Menu.find({"_id":req.query.id})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/getPizza',async(req,res)=>{
  try{
    const menu = await Menu.find({"type":"pizza"})
    console.log("getmenu")
    res.json(menu)
  }
  catch(error){
    console.log(error)
  }
})

app.post('/removemenu',async(req,res)=>{
  try{

    Menu.find({ "_id":req.body._id }).deleteOne().exec();
    res.json("removed")
  }
  catch(error){
    console.log(error)
    res.json(error)
  }
}
)
app.post('/updatemenu',async(req,res)=>{
  try{
    await Menu.updateMany({ "_id":req.body._id},{$set:{"description":req.body.description}});
    await Menu.updateMany({ "_id":req.body._id},{$set:{"price":req.body.price}});
    res.json("updated")
  }
  catch(error){
    console.log(error)
    res.json(error)
  }
}
)
app.post('/addrecommend',async(req,res)=> {
  try{
    const recommend = await Recommend.create({
      menuid:req.body.menuid,
      name : req.body.name,
      type : req.body.type,
      price: req.body.price,
      ingr_need:req.body.ingr_need,
      description:req.body.description,
      img_path: req.body.img_path,
      //onlypizza
      size: req.body.size,
      dough: req.body.dough,
      crust: req.body.crust,
      sauce: req.body.sauce,
      package: req.body.package 
    })
    recommend.save()
    res.json(recommend)
  }
  catch(error){
    console.log(error)
    res.json(error)
  }
})

app.get('/getrecommend',async(req,res)=>{
  try{
    const recommend = await Recommend.find({})
    res.json(recommend)
  }
  catch(error){
    console.log(error)
  }
})

app.post('/removerecommend',async(req,res)=>{
  try
  {
    const recommend = await Recommend.find({ "_id":req.body._id }).deleteOne();
    res.json(recommend)
  }
  catch(error){
    console.log(error)
  }
})
app.post('/addToCart',async(req,res) =>{
    try{
      const user = await User.findOne({"_id":req.body._id})
      console.log(user)
      const index = user.cart.findIndex((e => e.id === req.body.itemid))
      if ( index !== -1) {
      user.cart[index].quantity = req.body.quantity
      await User.updateMany({"_id":req.body._id},{$set:{"cart":user.cart}})         
      }
       else if (req.body.quantity === 0){
        user.cart.splice(index,1)
       }
       else{
        user.cart.push({id:req.body.itemid,quantity:req.body.quantity,additional:req.body.additional})
       }
      await user.save()
      console.log(user)
      res.json(user)
    }
    catch(error){
      console.log(error)
    }
  }
)

app.post('/clearCart',async(req,res) =>{
  try{
    const user = await User.findOne({"_id":req.body._id})
    await User.updateMany({"_id":req.body._id},{$set:{"cart":[]}})         
    await user.save()
    console.log(user)
    res.json(user)
  }
  catch(error){
    console.log(error)
  }
}
)

app.get('/getCart',async(req,res) =>{
  try{
    const user =await User.findOne({"_id":req.query.userid})
    res.json(user.cart)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/isItemInCart',async(req,res) =>{
  try{
    const user = await User.findOne({_id:req.query.userid})
    const index = user.cart.findIndex((e => e.id === req.query.itemid))
    if (index===-1){
      res.json(0)
    }
    else{
      res.json(user.cart[index].quantity)
    }
  }
  catch(error){
    console.log(error)
  }
})

app.post('/checkout',async(req,res)=>{
  try{
    const order = Order.create({
      user_id: req.body.userid,
      datetime: Date.now(),
      confirm_datetime: null,
      status: "waiting for payment",
      billing_type: "",
      cart :req.body.cart,
      adr_lat : "0",
      adr_lon  : "0",
      adr_dis : 0,
      user_fname : req.body.user_fname,
      user_lname : req.body.user_lname,
      price : req.body.price,
      address : req.body.address,
      province : req.body.province,
      district : req.body.district,
      subdistrict : req.body.subdistrict,
      postcode:req.body.postcode,
      bill_img:req.body.bill_img
    })
    res.json(order)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/getorder',async(req,res) =>{
  try{
    const order = await Order.find({_id:req.query._id})
    res.json(order)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/getordercart',async(req,res) =>{
  try{
    const order = await Order.findOne({_id:req.query._id})
    console.log(order.cart)
    res.json(order.cart)
  }
  catch(error){
    console.log(error)
  }
})

app.get('/getwaitingforpayment',async(req,res)=>{
  try{
    const order = await Order.find({status: "waiting for payment"})
    res.json(order)
  }
  catch(error){
    console.log(error)
  }

})

app.post('/paymentcheck',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "waiting for kitchen"}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }

})

app.get('/getwaitingforkitchen',async(req,res)=>{
  try{
    const order = await Order.find({status: "waiting for kitchen"})
    res.json(order)
  }
  catch(error){
    console.log(error)
  }

})

app.post('/kitchenaccept',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "preparing order"}})
    await Order.updateMany({"_id":req.body._id},{$set:{confirm_datetime: Date.now()}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }
})

app.post('/kitchendeny',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "cancled by kitchen"}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }
})

app.post('/kitchendone',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "waiting for rider"}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }
})
app.get('/getwaitingforrider',async(req,res)=>{
  try{
    const order = await Order.find({status: "waiting for rider"})
    res.json(order)
  }
  catch(error){
    console.log(error)
  }

})
app.post('/rideraccept',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "delivering order"}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }
})

app.post('/riderdone',async(req,res)=>{
  try{
    await Order.updateMany({"_id":req.body._id},{$set:{status: "order completed"}})
    res.json("updated")
  }
  catch(error){
    console.log(error)
  }
})
//admin account generate
app.post('/admingen',async(req,res) =>{
  try{
      //Get user input
    const {username,password} = req.body;
    //Encrypt user password+salt
    const Salts = crypto.lib.WordArray.random(128/8);
    encryptedPassword = await SHA256(password+Salts);

    //Create user in database
    const user = await Admin.create({
      username:username,
      password:encryptedPassword,
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
app.post('/ridergen',async(req,res) =>{
  try{
      //Get user input
    const {username,password} = req.body;
    //Encrypt user password+salt
    const Salts = crypto.lib.WordArray.random(128/8);
    encryptedPassword = await SHA256(password+Salts);

    //Create user in database
    const user = await Rider.create({
      username:username,
      password:encryptedPassword,
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
app.post('/chefgen',async(req,res) =>{
  try{
      //Get user input
    const {username,password} = req.body;
    //Encrypt user password+salt
    const Salts = crypto.lib.WordArray.random(128/8);
    encryptedPassword = await SHA256(password+Salts);

    //Create user in database
    const user = await Chef.create({
      username:username,
      password:encryptedPassword,
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
app.post('/login-admin', async(req,res) => {
  try{
    //Get user input
    const {username,password} = req.body;
    //Validate user input
      if (!username || !password) {
        return res.status(400).send("Please enter username and password");
      }
    //Find user in database
    const user = await Admin.findOne({username:username});
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

app.post('/login-chef', async(req,res) => {
  try{
    //Get user input
    const {username,password} = req.body;
    //Validate user input
      if (!username || !password) {
        return res.status(400).send("Please enter username and password");
      }
    //Find user in database
    const user = await Chef.findOne({username:username});
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

app.post('/login-rider', async(req,res) => {
  try{
    //Get user input
    const {username,password} = req.body;
    //Validate user input
      if (!username || !password) {
        return res.status(400).send("Please enter username and password");
      }
    //Find user in database
    const user = await Rider.findOne({username:username});
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
//token test
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

app.get('/getuserdata',async(req,res) => {
  try{
  const user =  await User.findOne({_id: req.query._id})
  res.json({
    address:user.address,
    province:user.province,
    district:user.district,
    subdistrict:user.subdistrict,
    postcode:user.postcode,
    fname:user.fname,
    lname:user.lname,
  })
  }
  catch(error){
    console.log(error)
  }
})

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
  res.send(req.file);
});

app.get('/getImage/:fileName', (req, res) => {
  try{  
    const fileName = req.params.fileName;
    res.sendFile(__dirname+'/images/'+fileName);
  }catch(err){
    res.status(400).json(err);
  } 
 
});


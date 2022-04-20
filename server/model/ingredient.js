const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name : {type:String, default: null},
   quantity: {type:Number, default: 0 },
   price: {type:Number, default: 0 },
   expire_date: {type:Date, default: null },
   type: {type:String, default: null},
});

mongoose.model('ingredient', UserSchema);
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, unique: true},
    password: {type:String, default: null},
    fname : {type:String, default: null},
    lname : {type:String, default: null},
    phonenumber : {type:String, default: null},
    birthdatem : {type:Number,default: null},
    birthdatey : {type:Number,default: null},
    sex : {type:Number,default: null},
    address : {type:String, default: null},
    province : {type:String, default: null},
    district : {type:String, default: null},
    subdistrict : {type:String, default: null},
    postcode : {type:String, default: null},
    cart : {type:Array, default: []},
    salt : String,
    token: String
});

mongoose.model('user', UserSchema);
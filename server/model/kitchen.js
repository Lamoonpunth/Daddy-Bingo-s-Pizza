const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type:String, default: null},
    password: {type:String, default: null},    
    type : {type:String, default: null},
    phonenumber : {type:String, default: null},
    salt : String,
});

mongoose.model('kitchen', UserSchema);
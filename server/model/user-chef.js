const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, unique: true},
    password: {type:String, default: null},
    type: {type:String, default: null},
    phonenumber : {type:String, default: null},
    salt : String,
    token: String
});

mongoose.model('user-chef', UserSchema);
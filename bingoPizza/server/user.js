const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fname : String,
    lname : String,
    phonenumber : String,
    birthdatem : Number,
    birthdatey : Number,
    sex : Number,
    address : String,
    province : String,
    district : String,
    subdistrict : String,
    postcode : String
});

mongoose.model('user', UserSchema);
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type:String, default: null},    
    price: {type:Number, default: 0 },
    option: {type:String ,default: ""},
    description:{type:String,default: ""},
});

mongoose.model('service', UserSchema);
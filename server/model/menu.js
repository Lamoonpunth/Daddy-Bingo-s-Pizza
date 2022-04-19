const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type:String, default: null},
    type : {type:String, default: null},
    price: {type:Number, default: 0 },
    ingr_need:{type:Array ,default: []},
    description:{type:String,default: ""},
    img_path: {type:String,default: ""}
});

mongoose.model('menu', UserSchema);
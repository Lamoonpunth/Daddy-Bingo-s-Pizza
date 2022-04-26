const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    menuid : {type:String, default:null},
    name : {type:String, default: null},
    type : {type:String, default: null},
    price: {type:Number, default: 0 },
    ingr_need:{type:Array ,default: []},
    description:{type:String,default: ""},
    img_path: {type:String,default: ""},
    //onlypizza
    size: {type:String,default:null},
    dough: {type:String,default:null},
    crust: {type:String,default:null },
    sauce: {type:String, default:null},
    package: {type:String,default:null}
});

mongoose.model('recommend', UserSchema);
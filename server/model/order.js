const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {type:String, default: null},
    datetime: {type:Date, default: Date.now()},
    confirm_datetime: {type:Date, default: Date.now()},
    status: {type:String, default: null},
    billing_type: {type:String, default: null},
    cart :{type:Array, default: null},
    adr_lat : {type:String, default: null},
    adr_lon  : {type:String, default: null},
    adr_dis : {type:Number, default: null},
    bill_img : {type:String , default: null},
    user_fname : {type:String , default:null},
    user_lname : {type:String ,default: null},
    price : {type:Number , default : null},
    address : {type:String, default : null},
    province : {type:String , default :null},
    district : {type:String , default :null},
    subdistrict : {type:String , default :null},
    postcode : {type:String , default :null},
    reason : {type:String , default : null},
    rate : {type:Number , default : 0}

});

mongoose.model('order', UserSchema);
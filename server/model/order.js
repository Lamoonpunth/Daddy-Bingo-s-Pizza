const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {type:String, default: null},
    datetime: {type:Date, default: Date.now},
    confirm_datetime: {type:Date, default: null},
    status: {type:String, default: null},
    billing_type: {type:String, default: null},
    cart :{type:Array, default: null},
    adr_lat : {type:String, default: null},
    adr_lon  : {type:String, default: null},
    adr_dis : {type:Number, default: null},
});

mongoose.model('order', UserSchema);
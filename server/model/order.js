const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    order_id: {type:String, default: null},
    user_id: {type:String, default: null},
    datetime: {type:String, default: Date.now},
    confirm_datetime: {type:String, default: null},
    status: {type:String, default: null},
    billing_type: {type:String, default: null},
    cart :{type:String, default: null},
    adr_lat : {type:Number, default: null},
    adr_long : {type:Number, default: null},
    adr_lon  : {type:String, default: null},
    adr_dis : {type:String, default: null},
});

mongoose.model('menu', UserSchema);
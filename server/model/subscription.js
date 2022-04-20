const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id : {type:String, default: null},
    user_card: {type:String, default: null},
    type : {type:String, default: null},
    frequency : {type:Date, default: null },
    subscript_date : {type:Date, default: Date.now },
    delivering_date : {type:Date, default: null},
    expire_date : {type:Date, default: null},
    cart : {type:Array, default: []},
    adr_lat : {type:Number, default: null},
    adr_long : {type:Number, default: null},
    billing_type : {type:String, default: null},
});

mongoose.model('subscription', UserSchema);
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    menuid : {type:String, default:null}
});

mongoose.model('recommend', UserSchema);
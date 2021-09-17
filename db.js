const  mongoose  = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
var mongoURL = process.env.MONGO_ATLAS_URL;

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})
var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo DB Connnection Sucessful');
})
db.on('error', () => {
    console.log('Mongo DB Connection Failed');
})

module.exports = mongoose
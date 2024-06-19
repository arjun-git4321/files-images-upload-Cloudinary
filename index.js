const express=require('express');

const app=express();
require('dotenv').config();

app.use(express.json());

const PORT=process.env.PORT || 9000

const fileupload=require("express-fileupload");
app.use(fileupload());


const db=require("./configurations/database")
db.data();


const cloudinary=require("./configurations/cloudinary");
cloudinary.cloudinaryConnect();
// require("./configurations/database").connect();

// require('./configurations/database').connect();



const nodes=require('./routes/fileUpload');

app.use('/api/v1',nodes);







app.listen(PORT,(req,res)=>{
    console.log(`app running at ${PORT}`);

})
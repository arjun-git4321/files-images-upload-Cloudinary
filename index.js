const express=require('express');

const app=express();
require('dotenv').config();



const PORT=process.env.PORT || 9000

app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


const db=require("./configurations/database")
db.data();


const cloudinary=require("./configurations/cloudinary");
cloudinary.cloudinaryConnect();
// require("./configurations/database").connect();

// require('./configurations/database').connect();



const upload=require("./routes/FileUploading");

app.use('/api/v1',upload);







app.listen(PORT,(req,res)=>{
    console.log(`app running at ${PORT}`);

})
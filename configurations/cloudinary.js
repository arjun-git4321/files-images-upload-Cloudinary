const cloudinary=require('cloudinary').v2;

require('dotenv').config();

exports.cloudinaryConnect=()=>{
    try{
        cloudinary.config({
            cloudName:process.env.CLOUDNAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,

        })

    }
    catch(err){
        console.log(err);

    }
}
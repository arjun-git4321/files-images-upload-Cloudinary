const mongoose=require("mongoose");


const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    tags:{
        type:String,
    }

})
const file=mongoose.model("File",fileSchema);
module.exports=file;
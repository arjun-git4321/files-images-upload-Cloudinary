const File=require("../models/File");
const cloudinary=require("cloudinary").v2;
// require("dotenv").config();

exports.localfileUpload=(req,res)=>{
    try{
        const file=req.files.file;
        console.log(file);

        let path= __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        // 
        console.log(path);



        file.mv(path,(err)=>{
            console.log(err);
        });

        res.status(200).json({
            success:true,
            message:'file uploaded succcessfully',
        })
    }
    catch(error){
        console.log(err);
        console.log("error while uploading a file");

    }
}
function isSupported(type,imageSupporter){
    return imageSupporter.includes(type);

}

async function uploadToCloudinary(file,folder){

    const options={folder};
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);  
}
exports.imageUploader=async(req,res)=>{
    try{
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        const file=req.files.imageFile;
        console.log(file);



        //validation
        const imageSupporter=["jpg","png","jpeg"];
        const fileTypes=file.name.split(".")[1].toLowerCase();
        console.log("coming", fileTypes);


        if(!isSupported(fileTypes, imageSupporter)){
            return res.status(400).json({
                success:false,
                message:'file format not support',
            })
        }
        console.log("coming too");
        const rep = await uploadToCloudinary(file, "ArjunPics");
        console.log(rep);
        // console.log("yes coming");




        res.json({
            success:true,
            imageUrl:rep.secure_url,
            message:'image uploaded successfully',
        })

        const imagefile=await File.create({
        name,
        email,
        imageUrl:rep.secure_url,
        tags

        })


    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message:'error while uploading image in cloudinary',
        })

    }
}

function isVideoSupport(type,videoSupport){
    return videoSupport.includes(type);

}

async function UploadToCloudinary(file,folder){

    const options={folder};
    options.resource_type="auto";
return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.videoUpload=async (req,res)=>{
    try{

        const{name,tags,email}=req.body;
        console.log(name,tags,email);


        const file=req.files.videoFile;
        console.log(file);


        const videoSupport=["mp4","mov"];
        const videoType=file.name.split('.')[1].toLowerCase();
        console.log(videoType);

        if(!isVideoSupport(videoType,videoSupport)){
            return res.status(400).json({
                success:false,
                message:'vidoe format not supported',
            });
        }

        const rep=await UploadToCloudinary(file, "ArjunPics");

        console.log(rep);


        const fileData=await File.create({
            name,
            email,
            imageUrl:rep.secure_url,
            tags,

        })

        res.status(400).json({
            success:true,
            imageUrl:rep.secure_url,
            message:'video uploaded successfull',

        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:'error while uploading video to cloudinary',

        })
        
    }
}
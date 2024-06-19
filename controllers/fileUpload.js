const file=require('../models/file');

exports.localfileUpload=(req,res)=>{
    try{
        const file=req.files.file;
        console.log(file);

        let path= __dirname + "/files/" + Date.now();
        // `.${file.name.split('.')[1]}`
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

exports.imageUploader=async(req,res)=>{
    try{
        const {name,email,tags}=req.body;
        console.log(name,email,tags);

        const file=req.files.imageUrl;
        console.log(file);


        //validation
        const imageSupporter=["jpg","png"];
        const 


    }
    catch(error){

    }

}
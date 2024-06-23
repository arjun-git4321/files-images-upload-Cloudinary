const express=require("express");

const router=express.Router();

const {localfileUpload, imageUploader, videoUpload}=require("../controllers/fileUpload");

router.post("/uploadfile", localfileUpload);
router.post("/imageUpload", imageUploader);
router.post("/videoUpload", videoUpload);


module.exports=router;
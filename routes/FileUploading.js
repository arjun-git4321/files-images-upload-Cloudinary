const express=require("express");

const router=express.Router();

const {localfileUpload, imageUploader, videoUpload, imageReducer}=require("../controllers/fileUpload");

router.post("/uploadfile", localfileUpload);
router.post("/imageUpload", imageUploader);
router.post("/videoUpload", videoUpload);
router.post('/imageSizeReducer',imageReducer);

module.exports=router;
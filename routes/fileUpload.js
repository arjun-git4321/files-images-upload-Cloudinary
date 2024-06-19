const express=require("express");

const router=express.Router();

const {localfileUpload}=require("../controllers/fileUpload");

router.post("/uploadfile", localfileUpload);


module.exports=router;
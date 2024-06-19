const mongoose=require('mongoose');

require('dotenv').config();

exports.data=()=>{

    mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    })
    .then(()=>{console.log("database connected successfully")})
    .catch((err)=>{console.log("db connection issue");
                   console.log(err);
                   process.exit(1);
    })

}

// module.exports=data

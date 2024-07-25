const jwt=require("jsonwebtoken");
const User=require("../models/patient/user");
const bcrypt=require("bcrypt");
const asyncHandler=require("express-async-handler")

const protect = asyncHandler(async(req,res,next)=>{
    let token;
    try {
        token = req.cookies.jwt;
        const decoded = jwt.verify(token,'abc123');
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    }catch(err){
        res.status(401).json({error:err.message});
    }
});

const safety = asyncHandler(async(req,res,next)=>{
    let token;
    
        token = req.header("Authorization");
        if(!token){
            return res.status(401).json({message:"Not accessable"})
        }
        const jwtToken = token.replace("Bearer","").trim();
        try{
            const isVerified = jwt.verify(jwtToken, "abc123");
            const userData = await User.findOne({_id:isVerified.userId});
            req.user = userData;
            req.token = token;
            req.userID = userData._id;
            next();
        }
        catch(error){
            console.log(error)
            return res.status(401).json({message:"Unauthorized, Invalid token"})
        }        
});

module.exports={protect,safety};
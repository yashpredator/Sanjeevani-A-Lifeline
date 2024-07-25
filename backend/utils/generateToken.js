// import jwt from 'jsonwebtoken';
const jwt=require("jsonwebtoken");


const generateToken = (res,userId) => {
    const secretkey='abc123';
    const token = jwt.sign({userId},secretkey,
    {
        expiresIn:'30d'
    });
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:true,  // Set to true in production if served over HTTPS
        sameSite:'strict',
        maxAge:30*24*60*60*1000,
    });
    console.log(token);
    return token;
}

module.exports=generateToken;
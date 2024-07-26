const express = require('express');
const mongoose =require('mongoose');
// const {connectToDb, getDb} = require('./src/configuration/config')
// const port = process.env.PORT || 3000;
const app = express();
const cookieParser=require("cookie-parser")
// const userRouter=require("../sanjeevani_backend/src/routes/patient/user.js");
// const doctorRouter=require("../sanjeevani_backend/src/routes/doctor/admin.js");
const doctorRouter=require("../backend/routes/doctor/admin.js");
const userRouter=require("../backend/routes/patient/user.js");

const cors = require('cors');
//db connection
// const {notFound,errorHandler}=require("../sanjeevani_backend/src/middleware/apierror.js")
const connect=async()=>{
    try{
        await mongoose.connect("mongodb+srv://yashrajsrivastava555:yashraj123@cluster0.labbyuu.mongodb.net/?retryWrites=true&w=majority&dbName=Sanjeevani");
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(userRouter);
app.use(doctorRouter);

app.listen(8800,()=>{
    connect();
    console.log("Backend is up and running")
})

// app.get('/',(req,res)=>{
//     res.send('This is the home page');
// });
// app.use(notFound);
// app.use(errorHandler);
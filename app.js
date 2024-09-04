const express=require('express');
const mongoose=require('mongoose');
// const dotenv =require("dotenv");
const userRouter=require ("./routes/userRouter")
const cors=require('cors')

// dotenv.config();

mongoose.connect("mongodb+srv://priyashakthiarivazhagan:7092919892@priya.qcgrd.mongodb.net/AppStore?retryWrites=true&w=majority&appName=priya")
.then(()=>{
    console.log("Connected to db");
    
});

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     branch:String
// },{collection:"detail"});

// const User=mongoose.model("User",userSchema)



const app=express();
app.use(cors())
app.use(express.json());
app.use("/app",userRouter)


// app.get('/user',async(req,res)=>{

//     const userData=await User.find();
//     res.status(200).json(userData)

//     // res.json(userData)
//     // res.send("Hello from the server")
// })

// app.post('/user',async(req,res)=>{
//     // const{name,email,branch}=req.body;
//     const newUser=new User({name:"priya",email:"priyapapa@gmail.com",branch:"CSE"})
//     const resData=await newUser.save();
//     res.status(200).json(resData)
//     // await newUser.save();

// })

// app.patch("/user/:id",async(req,res)=>{
//     try{
//         const resData=await User.findByIdAndUpdate(req.params.id,req.body)
//         res.status(200).json({
//             message:'Updataed',
//             data:resData,
//         });

//     }catch(err){
//         res.status(500).json({
//             message:"Internal error"
//         })
//     }
// })

// app.delete("/user/:id",async(req,res)=>{
//     try{
//         const resData=await User.findByIdAndDelete(req.params.id,req.body)
//         res.status(200).json({
//             message:'Deleted',
//             data:resData,
//         });

//     }catch(err){
//         res.status(500).json({
//             message:"Internal error"
//         })
//     }
// })

// app.get('/about',(req,res)=>{
//     res.send("about route")
// })
app.listen(5000,()=>{
    console.log("Server is running");
    
})
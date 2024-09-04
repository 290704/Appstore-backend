const express=require('express');
const User =require("../models/userModel");
const app=express();
app.use(express.json());

exports.getAllUsers = async (req,res) => {
    if(req.query){
        const queryObject = {...req.query}
        var query = await User.find(queryObject)
    }
    else{
        var query = await User.find();
    }
    res.json(query)
}

// exports.getAllUsers=async(req,res)=>{
//     try{

        // //filter
        // const queryObj={...req.query}
        // console.log(queryObj);
        // const excludeFields=["page","sort","limit","fields"]; 
        // excludeFields.forEach((el)=>delete queryObj[el]);
        // let query=User.find(queryObj) 
        
        // //sorting
        // if(req.query.sort){
        //     const sortstr=req.query.sort.split(',').join(' ')
        //     query=query.sort(sortstr)
        // }

        // //fields
        // if(req.query.fields){
        //     const fieldstr=req.query.fields.split(',').join(' ')
        //     query=query.select(fieldstr)
        // }else{
        //     query=query.select('-__v')
        // }
        // //pagination
        // const pageNum=req.query.page*1 || 1
        // const limitNum=req.query.limit*1 || 1
        // const skipNum=(page-1)*limit;
        // query=query.skip(skipNum).limit(limitNum)
        // const userData=await query;

//     const userData=await User.find();
//     res.status(200).json(userData)
// }catch(err){
//     res.status(500).json({       
//          message:"Internal error"
//     })
// }
//     // res.json(userData)
//     // res.send("Hello from the server")
// }

// exports.createUser=async(req,res)=>{
//     // const{name,email,branch}=req.body;
//     try{
        
//     const resData=await User.create(req.body);
//     res.status(200).json(resData)
//     // await newUser.save();

//     }
//     catch(err){
//         res.json({message : err.message})
//     }
    

// }

// exports.updateUser=async(req,res)=>{
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
// }

// exports.deleteUser=async(req,res)=>{
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
// }
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     unique:true,
    //     minlength:[5,"must have min length"],
    //     maxlength:[10,"must hava max length"],
    //     required:[true,"unique must be name "]
    // },
    // rating:{
    //     type:Number,
    //     min:[1,"rating must be atleast 1"],
    //     max:[5,"rating must be atmost 5"]

    // },
    // price:{
    //     type:Number,
    //     required:[true,"price should be mentioned"],
    //     min:[0,"price must be positive"]

    // },
    // pages:{
    //     type:Number,
    //     required:[true,"book must have page number"],
    //     min:[10,"must have 10 pages"],
    //     max:[100,"must have 100 pages"],
    // }
    name:String,
    url:String,
    category:String,
     image:String
},{collection:"app"});

const User=mongoose.model("User",userSchema)

module.exports=User
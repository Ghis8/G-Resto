const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    },
    token:String,
    favorites:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Food"
        }
    ],
    order:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Food"
        }
    ]

},{timestamps:true})

module.exports=mongoose.model('User',userSchema)
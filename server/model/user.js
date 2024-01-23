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

})

module.exports=mongoose.model('User',userSchema)
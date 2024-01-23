const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    img:{
        type:Array,
        default:[]
    }
})

module.exports=mongoose.model("Food",foodSchema)
const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    description:String,
    category:{
        type:String,
        required:true,
        enum:['foods','fruits','juices','vegetables','cocktails','beers']

    },
    img:{
        type:Array,
        default:[]
    }
},{timestamps:true})

module.exports=mongoose.model("Food",foodSchema)
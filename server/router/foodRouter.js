const router=require('express').Router()
const Food=require('../model/food')

//create new food
router.post('/create',async(req,res)=>{
    const {name,price,description,img}=req.body
    try {
        const existingFood=await Food.findOne({name})
        if(existingFood){
            let food=await Food.findByIdAndUpdate({_id:existingFood._id},{
                price,
                name,
                description,
                img
            })
            
            return res.status(200).json({message:`Item Updated`})
        }
        const food=await Food.create({
            name,
            price,
            description,
            img
        })
        return res.status(201).json({message:"New Food created",food})
    } catch (error) {
        return res.status(error.code).json({message:"Something went wrong",error})
    }
})

// add Images of food


module.exports=router
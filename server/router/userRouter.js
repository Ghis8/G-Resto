const express=require('express')
const router=express.Router()
const User=require('../model/user')
const Food=require('../model/food')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { getToken } = require('../utils/token')


//register user
router.post('/user/register',async(req,res)=>{
    try {
        const {first_name,last_name,email,password}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.status(409).json({message:"User With this email address already exist"})
        }else{
            const hashedPassword=await bcrypt.hash(password,10)
            const newUser=await User.create({
                firstName:first_name,
                lastName:last_name,
                email,
                password:hashedPassword
            })
            res.status(201).json({message:"User Created!",newUser})
        }
    } catch (error) {
        res.status(500).json({message:"Internal Error",error})
    }
})

//log user
router.post('/user/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user) return res.status(400).json({message:"User with the email provided does not exist"})
        
        const comparePassword=await bcrypt.compare(password,user.password)
        if(!comparePassword){
            return res.status(400).json({message:"Wrong password"})
        }
        const token=getToken({
            first_name:user.firstName,
            last_name:user.lastName,
            email,
        })
        user.token=token
        user.save()
        return res.status(200).json({message:"User Logged In",user})
    } catch (error) {
        return res.status(error.code).json({message:"Server Internal error",error})
    }
})

//user add food to cart
router.post('/user/:id/:foodId',async(req,res)=>{
    const userId=req.params.id
    const foodId=req.params.foodId
    try {
        const food=await Food.findById({_id:foodId})
        if(!food)return res.status(404).json({message:"This food does not exist"})

        await User.findByIdAndUpdate({_id:userId},{
            $push:{
                order:{
                    _id:foodId
                }
            }
        })
        return res.status(200).json({message:"Item added to cart"})
        
    } catch (error) {
        return res.status(error.code).json({message:"Something went Wrong",error})
    }
})

// add favorites plates
router.post('/user/:id/favorite/:foodId',async(req,res)=>{
    
    try {
        const user_id=req.params.id 
        const foodId=req.params.foodId
        const food=await Food.findById({_id:foodId})
        if(!food) return res.status(404).json({message:"Food not found"})
        await User.findByIdAndUpdate({_id:user_id},{
            $push:{
                favorites:{
                    _id:foodId
                }
            }
        })
        return res.status(200).json({message:"Item added to favorites"})
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error})
    }
})

//get user by Id
router.get('/user/:id',async(req,res)=>{
    const user_id=req.params.id
    try {
        const user=await User.findById({_id:user_id}).populate("order").populate('favorites')
        if(!user)return res.status(404).json({message:"User Not Found"})
        return res.status(200).json({message:"User Found",user})
    } catch (error) {
        return res.status(error.code).json({message:"Something went wrong",error})
    }
})



module.exports=router
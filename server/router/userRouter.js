const express=require('express')
const router=express.Router()
const User=require('../model/user')
const bcrypt=require('bcrypt')

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

router.post('/user/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        const comparePassword=await bcrypt.compare(password,user.password)
        if(!user.email){
            return res.status(400).json({message:"User with the email provided does not exist"})
        }
        else if(!comparePassword){
            return res.status(400).json({message:"Wrong password"})
        }
        return res.status(200).json({message:"User Logged In"})
    } catch (error) {
        return res.status(500).json({message:"Server Internal error",error})
    }
})

module.exports=router
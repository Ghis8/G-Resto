require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const userRouter=require('./router/userRouter')
const foodRouter=require('./router/foodRouter')


app.use(express.json())
//connect database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Database connected successfully'))
    .catch(err=>console.log(err))

app.use('/api/v1',userRouter)
app.use('/api/v1/food',foodRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server Running on http://localhost:${process.env.PORT}`)
})
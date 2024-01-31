const jwt=require('jsonwebtoken')

const getToken=(params)=>{
    return jwt.sign(params,process.env.TOKEN_SECRET,{
        expiresIn:"7d"
    })
}
const decodeToken=(token)=>{
    return jwt.verify(token,process.env.TOKEN_SECRET)
}
module.exports={
    getToken,
    decodeToken
}
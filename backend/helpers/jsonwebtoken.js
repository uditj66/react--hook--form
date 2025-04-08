const jwt =require('jsonwebtoken')
const prisma = require("../prisma/index");

const getJwtToken=(userId)=>{
    return jwt.sign({
        userId:userId
    },process.env.JWT_SECRET,{expiresIn:'1D'})

    
}

module.exports=getJwtToken;
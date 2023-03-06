import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'

export const signup = async(req,res) =>{
    const {name,email,password}=req.body;
    try{
        const existinguser=await users.findOne({email});
        if(existinguser){
            return res.status(400).json({message: "user already exist"})
        }

        const hashedPass=await bcrypt.hash(password, 12)
        const newUser=await users.create({name,email,password: hashedPass})
        const token=jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET,{expiresIn: '1h'})
        res.status(200).json({result : newUser,token})
    }
    catch(error){
        res.status(500).json("somethig went wrong")
        console.log(error)
    }
}


export const login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.staturs(400).json({message: "user does't exist"})
        }

        const isPassword= await bcrypt.compare(password, existinguser.password)
        if(!isPassword){
           return res.status(400).json({message:"Invalid credentials"}) 
        }

        const token=jwt.sign({email: existinguser.email, id: existinguser._id}, process.env.JWT_SECRET ,{expiresIn: '1h'})
        res.status(200).json({result : existinguser,token})
    }
    catch{

    }
}
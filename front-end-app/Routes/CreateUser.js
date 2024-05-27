const express=require('express');
const router=express.Router()
const User=require("../models/User")

router.post("/createUser",async(req,res)=>{
    try{
        await User.create({
            name:"project",
            password:"123456",
            email:"abc@gmail.com",
            location:"aaaaa"

        })
        res.json({success:true})
    }
    catch (error){
        res.json({success:false})
        console.log(error)
    }
})

module.exports=router;

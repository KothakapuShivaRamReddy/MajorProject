const express=require("express");

const router=express.Router()
const Wrapasync=require("../Utils/WrapAsync.js");
const ExpressError=require("../Utils/ExpressError.js");
const User=require("../models/user.js");

router.get("/signup",async(req,res)=>{

    
    res.render("user/signup.ejs"); //path for ejs

});
router.post("/signup",async(req,res)=>{
    try{let {username,email,password}=req.body;
    const newUser=new User({username,email});
    const registeredUser= await User.register(newUser,password);
    console.log( registeredUser);}
    catch(e){
        res.redirect("/signup");
    }
})
router.get("/login",(res,req)=>{
    res.render("user/login.ejs");
})

module.exports=router;
const express=require("express");
const router=express.Router();
const Wrapasync=require("../Utils/WrapAsync.js");
const ExpressError=require("../Utils/ExpressError.js");
const Listing=require("../models/listing.js");



router.get("/",Wrapasync(async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});// listings/index.js
    }));
//new route
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs");
}) 
//create route
router.post("/",
    Wrapasync(async (req,res,next)=>{
    
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));


//show route
router.get("/:id" ,Wrapasync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

//edit route
router.get("/:id/edit", Wrapasync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));
//update route
router.put("/:id",Wrapasync(async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate( id, {...req.body.listing});
     res.redirect(`/listings/${id}`);
}));
//delete route
router.delete("/:id",Wrapasync(async (req,res)=>{
    let {id}=req.params;
     const deletedListing= await Listing.findByIdAndDelete(id);
     console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports=router;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Listing=require("./models/listing.js");
const methodOverride = require("method-override")

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to server");
})
.catch((err)=>{
    console.log(err);
});
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true})); //the data req should be parse
app.use(methodOverride("_method"));
async function main(){
    await mongoose.connect(MONGO_URL);
};

//index route
app.get("/listings",async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});// listings/index.js
    });
//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//create route
app.post("/listings",async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})


//show route
app.get("/listings/:id" ,async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//edit route
app.get("/listings/:id/edit", async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});
//update route
app.put("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate( id, {...req.body.listing});
     res.redirect(`/listings/${id}`);
});
//delete route
app.delete("/listings/:id", async (req,res)=>{
    let {id}=req.params;
     const deletedListing= await Listing.findByIdAndDelete(id);
     console.log(deletedListing);
    res.redirect("/listings");
});


// app.get("/testlisting", async (req,res)=>{
//     let SampleListing=new Listing({
       
// title: "My New Villa",
// description: "By the beach",
// price: 1200,
// location: "Calangute, Goa",
// country: "India",
// });
//   await SampleListing.save();
//   console.log("Sample was Saved");
//   res.send("Successful testing");

    
// });
app.get("/",(req,res)=>{
    res.send("Hi,I am Root");
});
app.listen(8080,()=>{
    console.log("server is started");
});

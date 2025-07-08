const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Listing=require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate");
const Wrapasync=require("./Utils/WrapAsync.js");
const ExpressError=require("./Utils/ExpressError.js");

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
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


async function main(){
    await mongoose.connect(MONGO_URL);
};

//index route
app.get("/listings",Wrapasync(async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});// listings/index.js
    }));
//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//create route
app.post("/listings",
    Wrapasync(async (req,res,next)=>{
    
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));


//show route
app.get("/listings/:id" ,Wrapasync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

//edit route
app.get("/listings/:id/edit", Wrapasync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));
//update route
app.put("/listings/:id",Wrapasync(async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate( id, {...req.body.listing});
     res.redirect(`/listings/${id}`);
}));
//delete route
app.delete("/listings/:id",Wrapasync(async (req,res)=>{
    let {id}=req.params;
     const deletedListing= await Listing.findByIdAndDelete(id);
     console.log(deletedListing);
    res.redirect("/listings");
}));


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

// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found!"));
// });



// custom err handling middleware
app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong!"}=err;
    res.status(statusCode).render("Error.ejs",{message});
});




app.get("/",(req,res)=>{
    res.send("Hi,I am Root");
});

app.listen(8080,()=>{
    console.log("server is started");
});
// This runs for all unmatched routes
app.use((req, res, next) => {
    res.status(404).render("Error.ejs", { message: "Page Not Found!" });
});
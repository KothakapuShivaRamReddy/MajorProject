const mongoose=require("mongoose");
const initData=require("./data.js"); //requiring data 
const Listing=require("../models/listing.js");//requiring model listing.js in models

//connect to server
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to server");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
};

//past data will be deleted and new data is inserted
const initDB=async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('data was initized');
};

initDB();
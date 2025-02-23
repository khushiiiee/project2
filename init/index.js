const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log("conneted to DB");
})
.catch((err) => {
    console.log(err);
});


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"6697f1d0cff84b89e5b9c543"}));
    await Listing.insertMany(initData.data);
    console.log("data stored successfully");
};

initDB();


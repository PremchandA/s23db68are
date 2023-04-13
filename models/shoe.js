const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
    shoeName: String,
    shoePrice: Number,
    shoemadein: String
})
module.exports = mongoose.model("shoe", shoeSchema)
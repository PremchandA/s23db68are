const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
    shoeName: String,
    shoePrice:{type: Number,
    min: 0,
    max:500,
     required: true},
    shoemadein:{type: String}
})
module.exports = mongoose.model("shoe", shoeSchema)
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true }, // The logo will be a URL or file path
    address: { type: String, required: true },
});

module.exports = mongoose.model("Hotel", hotelSchema);

const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: { type: String, required: true },
    purpose: { type: String, enum: ["Business", "Personal", "Tourist"], required: true },
    stayFrom: { type: Date, required: true },
    stayTo: { type: Date, required: true },
    email: { type: String, required: true },
    idProofNumber: { type: String, required: true },
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
});

module.exports = mongoose.model("Guest", guestSchema);

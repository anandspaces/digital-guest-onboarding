const Guest = require("../models/guest");

exports.addGuest = async (req, res) => {
    const guestData = req.body;
    try {
        const guest = new Guest(guestData);
        await guest.save();
        res.status(201).json(guest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getGuests = async (req, res) => {
    const hotelId = req.params.hotelId;
    try {
        const guests = await Guest.find({ hotelId });
        res.json(guests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const Hotel = require("../models/hotel");
const QRCode = require("qrcode");

exports.addHotel = async (req, res) => {
    const { name, address } = req.body;
    const logo = req.file?.path; // Assuming file upload

    try {
        const hotel = new Hotel({ name, address, logo });
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.generateQRCode = async (req, res) => {
    const hotelId = req.params.hotelId;
    const url = `${req.protocol}://${req.get("host")}/hotel/${hotelId}`;

    try {
        const qrCodeDataURL = await QRCode.toDataURL(url);
        res.json({ qrCodeDataURL });
    } catch (err) {
        res.status(500).json({ error: "QR Code generation failed" });
    }
};

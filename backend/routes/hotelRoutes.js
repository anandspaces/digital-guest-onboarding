const express = require("express");
const multer = require("multer");
const { addHotel, getHotels, generateQRCode } = require("../controllers/hotelController");

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/", upload.single("logo"), addHotel);
router.get("/", getHotels);
router.get("/generate-qr/:hotelId", generateQRCode);

module.exports = router;

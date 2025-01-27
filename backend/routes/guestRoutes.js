const express = require("express");
const { addGuest, getGuests } = require("../controllers/guestController");

const router = express.Router();

router.post("/:hotelId", addGuest);
router.get("/:hotelId", getGuests);

module.exports = router;

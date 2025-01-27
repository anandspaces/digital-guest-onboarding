const mongoose = require('mongoose');
const fs = require('fs');
const Hotel = require('../models/hotel'); // Adjust path if needed
const Guest = require('../models/guest'); // Adjust path if needed
const dotenv = require("dotenv");
// Read the data from JSON files
const hotelsData = JSON.parse(fs.readFileSync('./seed/hotel_data.json', 'utf8'));
const guestsData = JSON.parse(fs.readFileSync('./seed/guest_data.json', 'utf8'));
dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Delete all data from collections (optional)
    await Hotel.deleteMany();
    await Guest.deleteMany();

    // Seed the hotels data
    const hotelDocs = await Hotel.insertMany(hotelsData);
    console.log("Hotels seeded");

    // Seed the guests data
    guestsData.forEach(async (guest) => {
      // Find the hotel by ID
      const hotel = hotelDocs.find(h => h._id.toString() === guest.hotelId);
      if (hotel) {
        guest.hotelId = hotel._id; // Ensure guest's hotelId is updated
        await Guest.create(guest);
      }
    });

    console.log("Guests seeded");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

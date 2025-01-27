const mongoose = require('mongoose');
const fs = require('fs');
const Hotel = require('../models/hotel'); // Adjust path if needed
const Guest = require('../models/guest'); // Adjust path if needed
const dotenv = require('dotenv');

// Read the data from JSON files
const hotelsData = JSON.parse(fs.readFileSync('./seed/hotel_data.json', 'utf8'));
const guestsData = JSON.parse(fs.readFileSync('./seed/guest_data.json', 'utf8'));

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');

    // Delete all data from collections (optional)
    await Hotel.deleteMany();
    await Guest.deleteMany();

    // Seed the hotels data and get the seeded hotels
    const hotelDocs = await Hotel.insertMany(hotelsData);
    console.log('Hotels seeded');

    // Create a map of hotel name to hotel _id for easy lookup
    const hotelMap = hotelDocs.reduce((acc, hotel) => {
      acc[hotel.name] = hotel._id;
      return acc;
    }, {});

    // Seed the guests data
    for (const guest of guestsData) {
      // Check if the hotel name provided in guest data exists in hotelMap
      const hotelId = hotelMap[guest.hotelName];
      if (hotelId) {
        guest.hotelId = hotelId; // Update guest's hotelId

        try {
          await Guest.create(guest);  // Create guest and save to database
          console.log(`Guest ${guest.fullName} added successfully.`);
        } catch (error) {
          console.error(`Error adding guest ${guest.fullName}:`, error);
        }
      } else {
        console.warn(`No matching hotel found for guest ${guest.fullName} with hotel ${guest.hotelName}`);
      }
    }

    console.log('Guests seeded');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

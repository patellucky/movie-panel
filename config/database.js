const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://patelrudra:R12345@cluster0.fivna.mongodb.net/"
    );
    console.log('Database is connected');
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
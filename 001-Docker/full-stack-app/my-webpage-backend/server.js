const express = require("express");
const mongoose = require("mongoose");

// Initialize an app
const app = express();
const PORT = 8000;

// Connect to MongoDB Database
mongoose.connect("mongodb://127.0.0.1:27017/uservisits", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a schema for the UserVisits collection
const UserVisitsSchema = new mongoose.Schema({
  count: Number
});

// Create a model for the UserVisits collection
const UserVisits = mongoose.model("UserVisits", UserVisitsSchema);

// Middleware to increment visit counts
const incrementVisitCount = async (req, res, next) => {
  try {
    let userVisits = await UserVisits.findOne({});
    // If the document doesn't exist, create it
    if (!userVisits) {
      userVisits = new UserVisits({ count: 0 });
    }
    // Increment the count by 1
    userVisits.count += 1;
    // Save the document
    await userVisits.save();
    // Set the visitCount in res.locals
    res.locals.visitCount = userVisits.count;
    // Pass the request to the next middleware
    next();
  } catch (error) {
    next(error);
  }
};

// API to get the visit count
app.get('/api/visits', (req, res) => {
  res.send(`${res.locals.visitCount}`);
});

// API to increment the visit count
app.get('/api/visits/increment', incrementVisitCount, (req, res) => {
  res.send(`Incremented visit count from ${res.locals.visitCount - 1} tp ${res.locals.visitCount}.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
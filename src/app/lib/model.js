const mongoose = require("mongoose");
//access questions
let Questions;

// Check if the model is already registered
if (mongoose.models && mongoose.models.questions) {
  // Reuse the existing model
  Questions = mongoose.models.questions;
} else {
  // Create the model if it doesn't exist
  Questions = mongoose.model("questions", {});
}

module.exports = Questions;

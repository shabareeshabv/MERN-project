const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true, unique: true },
  semesters: [{ sgpa: Number }],
  cgpa: { type: Number },
  percentage: { type: Number }
});

module.exports = mongoose.model('Student', StudentSchema);

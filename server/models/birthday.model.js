const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BirthdaySchema = new Schema(
  {
    userName: { type: String, required: true },
    cohort_number: { type: String, required: true },
    month: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const Birthday = mongoose.model('Birthday', BirthdaySchema);

module.exports = Birthday;
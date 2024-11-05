const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  homeNameOrNumber: String,
  street: String,
  suburb: String,
  state: String,
  postcode: String,
  country: String,
});

const ReferralSchema = new mongoose.Schema({
  givenName: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: AddressSchema,
});

module.exports = mongoose.model("Referral", ReferralSchema);

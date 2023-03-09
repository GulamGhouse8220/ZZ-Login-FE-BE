const mongoose = require("mongoose");

const User={
  Email:String,
  Qualifications:String,
  // Password:String,
  WorkHistory:String,
  InterestsHobbies:String,
  AvailabilityDate:String,
  FirstName: String
}

const Users = mongoose.model('users', User)

module.exports = Users;
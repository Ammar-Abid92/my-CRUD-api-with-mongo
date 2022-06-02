const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const Users = mongoose.model("users", userSchema);
module.exports = Users;

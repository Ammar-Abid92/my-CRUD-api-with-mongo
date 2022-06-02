const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ammar:367900aA@cluster0.1zari.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;

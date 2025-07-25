const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;

const mongoose = require("mongoose");

const { db_url_cloud } = require("./../constant");

const db_connection = async () => {
  try {
    await mongoose.connect(db_url_cloud);
    console.log("DB connected successfilly");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error);
  }
};

module.exports = db_connection;

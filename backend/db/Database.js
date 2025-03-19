const mongoose = require("mongoose");
require("dotenv").config({ path: "config/.env" });

const connectDatabase = () => {
  if (!process.env.DB_URL) {
    console.error("Database connection failed: Missing DB_URL in environment variables.");
    process.exit(1);
  }

  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;

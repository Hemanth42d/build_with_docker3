require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const db = require("./config/mongoose-connection");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

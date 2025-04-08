const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

// enable cors

app.use(cors({
  origin: "http://localhost:5173", // your frontend
  credentials: true
}));
// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());

// custom routers

const userrouter = require("./routes/userRoutes");
app.use("/api", userrouter);

app.get("/", (req, res) => {
  res.send("hello from udit");
});
app.listen(process.env.PORT, () => {
  console.log(`server  is running on port ${process.env.PORT}`);
});

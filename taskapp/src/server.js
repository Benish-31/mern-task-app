const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
-app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.use("/api/tasks", taskRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Connected`);
  })
  .catch((err) => console.log(err));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jitendrakumarddn01_db_user:sr6GoUzOghRuQlZ5@cluster0.vjjkogi.mongodb.net/myStore?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
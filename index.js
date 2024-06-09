const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000 http://127.0.0.1:3000`);
});

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

//node 2.1.12
mongoose
  .connect(
    "mongodb://accgoory:r0n1s4str4d1@ac-geuggzg-shard-00-00.hgtokl7.mongodb.net:27017,ac-geuggzg-shard-00-01.hgtokl7.mongodb.net:27017,ac-geuggzg-shard-00-02.hgtokl7.mongodb.net:27017/?ssl=true&replicaSet=atlas-a5g9wl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });

/* node 5.0 or later
mongoose.connect("mongodb+srv://accgoory:r0n1s4str4d1@backenddb.hgtokl7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!")
})
.catch((err) => {
    console.log("Connection failed!", err)
}) */

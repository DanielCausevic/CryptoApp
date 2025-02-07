require("dotenv").config(); 
const express = require("express");
const controller = require("./controllers/controller");

const app = express();
const port = 3000;

app.get("/", controller.getBitcoinPrice);

app.listen(port, () => {
    console.log("Server is running on localhost:${port}");
});

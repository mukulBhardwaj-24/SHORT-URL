require('dotenv').config()
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`Home Page`);
})
app.listen(PORT, () => {
    console.log(`Server has started at port: ${process.env.PORT}`);
})
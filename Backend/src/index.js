require('dotenv').config({path: "./env"})
const express = require("express");
const URL = require("./model/url.model.js")

const app = express();
const PORT = 3000;


app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        }
    )
})

app.listen(PORT, () => {
    console.log(`Server has started at port: ${process.env.PORT}`);
})
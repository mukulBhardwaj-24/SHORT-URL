require('dotenv').config()
const express = require("express");
const URL = require("./model/url.model.js")
const mongoose = require("mongoose");
const { DB_NAME } = require("./constants.js")

const app = express();
const PORT = 3000;

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })
        app.listen(PORT, () => {
            console.log(`Server has started at port: ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR: ", error);
        throw error;
    }
})()

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

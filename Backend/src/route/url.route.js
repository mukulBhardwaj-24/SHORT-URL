const express = require("express");
const { handleGenerateNewShortURL } = require("../controller/url.controller.js")

const router = express.Router()

router.post("/", handleGenerateNewShortURL);
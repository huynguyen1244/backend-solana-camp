const express = require("express");

const router = express.Router();

// Import các router khác
const nftrouter = require("./nft.router.js");

// Định nghĩa các router chính
router.use("/nft", nftrouter);

module.exports = router;

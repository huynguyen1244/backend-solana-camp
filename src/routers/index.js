const express = require("express");

const router = express.Router();

// Import các router khác
const nftrouter = require("./nft.router");
const historyRouter = require("./history.router");

// Định nghĩa các router chính
router.use("/nft", nftrouter);
// Định nghĩa các router phụ
router.use("/history", historyRouter); // Lịch sử giao dịch NFT

module.exports = router;

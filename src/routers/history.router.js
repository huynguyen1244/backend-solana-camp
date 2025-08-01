const express = require("express");
const router = express.Router();
const historyController = require("../controllers/history.controller.js");

router.post("/", historyController.addHistory); // Tạo mới 1 record
router.get("/mint/:mintAddress", historyController.getByMint); // Lịch sử theo NFT
router.get("/wallet/:walletAddress", historyController.getByWallet); // Lịch sử theo người dùng

module.exports = router;

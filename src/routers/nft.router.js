const express = require("express");
const nftController = require("../controllers/nft.controller.js");

const router = express.Router();

// Tạo NFT mới
router.post("/", nftController.createNft);

// Lấy danh sách tất cả NFT
router.get("/", nftController.getAllNfts);

// Lấy NFT theo mintAddress
router.get("/:mintAddress", nftController.getNftByMintAddress);

// Cập nhật NFT theo mintAddress
router.put("/:mintAddress", nftController.updateNftByMintAddress);

// Xóa NFT theo mintAddress
router.delete("/:mintAddress", nftController.deleteNftByMintAddress);

module.exports = router;

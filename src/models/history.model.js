const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  nftMintAddress: { type: String, required: true },
  buyerAddress: { type: String, required: true },
  sellerAddress: { type: String, required: true },
  price: { type: Number, required: true }, // Tính theo SOL hoặc lamports
  timestamp: { type: Date, default: Date.now },
  transactionSignature: { type: String, required: true },
});

const History = mongoose.model("History", historySchema);

module.exports = History;

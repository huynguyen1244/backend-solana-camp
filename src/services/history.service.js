const History = require("../models/history.model");

const createHistory = async (data) => {
  const history = new History(data);
  return await history.save();
};

const getHistoryByMint = async (mintAddress) => {
  return await History.find({ nftMintAddress: mintAddress }).sort({
    timestamp: -1,
  });
};

const getHistoryByWallet = async (walletAddress) => {
  return await History.find({
    $or: [{ buyerAddress: walletAddress }, { sellerAddress: walletAddress }],
  }).sort({ timestamp: -1 });
};

module.exports = {
  createHistory,
  getHistoryByMint,
  getHistoryByWallet,
};

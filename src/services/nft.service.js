const Nft = require("../models/nft.model.js");

const createNft = async (data) => {
  const nft = new Nft(data);
  return await nft.save();
};

const getAllNfts = async () => {
  return await Nft.find();
};

const getNftByMintAddress = async (mintAddress) => {
  return await Nft.findOne({ mintAddress });
};

const updateNftByMintAddress = async (mintAddress, updateData) => {
  return await Nft.findOneAndUpdate(
    { mintAddress },
    { ...updateData, updatedAt: Date.now() },
    { new: true }
  );
};

const deleteNftByMintAddress = async (mintAddress) => {
  return await Nft.findOneAndDelete({ mintAddress });
};

module.exports = {
  createNft,
  getAllNfts,
  getNftByMintAddress,
  updateNftByMintAddress,
  deleteNftByMintAddress,
};

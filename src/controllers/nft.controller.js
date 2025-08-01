const nftService = require("../services/nft.service.js");

const createNft = async (req, res) => {
  try {
    const nft = await nftService.createNft(req.body);
    res.status(201).json(nft);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "MintAddress đã tồn tại" });
    }
    res.status(500).json({ message: "Lỗi server khi tạo NFT" });
  }
};

const getAllNfts = async (req, res) => {
  try {
    const nfts = await nftService.getAllNfts();
    res.json(nfts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server khi lấy danh sách NFT" });
  }
};

const getNftByMintAddress = async (req, res) => {
  try {
    const { mintAddress } = req.params;
    const nft = await nftService.getNftByMintAddress(mintAddress);
    if (!nft) return res.status(404).json({ message: "NFT không tồn tại" });
    res.json(nft);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server khi lấy NFT" });
  }
};

const updateNftByMintAddress = async (req, res) => {
  try {
    const { mintAddress } = req.params;
    const updatedNft = await nftService.updateNftByMintAddress(
      mintAddress,
      req.body
    );
    if (!updatedNft)
      return res.status(404).json({ message: "NFT không tồn tại" });
    res.json(updatedNft);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server khi cập nhật NFT" });
  }
};

const deleteNftByMintAddress = async (req, res) => {
  try {
    const { mintAddress } = req.params;
    const deletedNft = await nftService.deleteNftByMintAddress(mintAddress);
    if (!deletedNft)
      return res.status(404).json({ message: "NFT không tồn tại" });
    res.json({ message: "Xóa NFT thành công" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server khi xóa NFT" });
  }
};

module.exports = {
  createNft,
  getAllNfts,
  getNftByMintAddress,
  updateNftByMintAddress,
  deleteNftByMintAddress,
};

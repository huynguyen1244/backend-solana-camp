const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  mintAddress: {
    type: String,
    required: true,
    unique: true, // mỗi mintAddress chỉ tồn tại 1 lần
  },
  ownerAddress: {
    type: String,
    required: true,
  },
  name: String, // tên NFT
  symbol: String, // ký hiệu NFT
  description: String, // mô tả
  image: String, // URL ảnh NFT (thường là IPFS hoặc Arweave link)
  attributes: [
    {
      trait_type: String,
      value: mongoose.Schema.Types.Mixed, // có thể string, số hoặc object
    },
  ],
  sellerFeeBasisPoints: Number, // ví dụ 1000 = 10%
  listed: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number, // giá bán (nếu đang listed)
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware tự động cập nhật updatedAt khi save
nftSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Nft = mongoose.model("Nft", nftSchema);

module.exports = Nft;

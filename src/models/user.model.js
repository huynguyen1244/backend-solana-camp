const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true, // mỗi walletAddress chỉ tồn tại 1 lần
  },
  username: {
    type: String,
    required: true,
    unique: true, // mỗi username chỉ tồn tại 1 lần
  },
  email: {
    type: String,
    required: true,
    unique: true, // mỗi email chỉ tồn tại 1 lần
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
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;

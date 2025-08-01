const historyService = require("../services/history.service.js");

const addHistory = async (req, res) => {
  try {
    const newRecord = await historyService.createHistory(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    console.error("Add history error:", error);
    res.status(500).json({ error: "Failed to create history" });
  }
};

const getByMint = async (req, res) => {
  try {
    const history = await historyService.getHistoryByMint(
      req.params.mintAddress
    );
    res.json(history);
  } catch (error) {
    console.error("Get history by mint error:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};

const getByWallet = async (req, res) => {
  try {
    const history = await historyService.getHistoryByWallet(
      req.params.walletAddress
    );
    res.json(history);
  } catch (error) {
    console.error("Get history by wallet error:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
};

module.exports = {
  addHistory,
  getByMint,
  getByWallet,
};

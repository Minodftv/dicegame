const gameLogic = {
  rollDice: async (chatId) => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    // Update game state
    // ...
    return rollResult;
  },

  placeBet: async (chatId, betAmount) => {
    // Update game state
    // ...
    return true;
  },
};

module.exports = gameLogic;

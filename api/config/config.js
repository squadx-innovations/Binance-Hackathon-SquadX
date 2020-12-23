require('dotenv').config();

module.exports = {
  db: {
    str: process.env.NFT_MONGO_URL,
    options: {
      auto_reconnect: true,
      reconnectTries: Number.MAX_SAFE_INTEGER,
      poolSize: 200,
      useNewUrlParser: true,
      readPreference: 'primaryPreferred',
    },
  },
  base_url: 'https://localhost:3000/',
  tokenContractAddress: ''
};

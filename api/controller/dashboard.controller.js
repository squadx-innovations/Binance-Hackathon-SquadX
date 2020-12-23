
require('dotenv').config();

const responseHelper = require('../helpers/responseHelper');
const logger = require('../middleware/logger');

module.exports.index = async (req, res) => {
  const address = req.session.web.accountId;

  res.render('dashboard', {
    title: 'NFT-Lend',
    activeBar: 'dashboard',
    session: req.session.web,
  });
};


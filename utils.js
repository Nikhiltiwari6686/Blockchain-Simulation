const crypto = require('crypto');

function calculateHash(index, timestamp, transactions, previousHash, nonce) {
  const data = index + timestamp + JSON.stringify(transactions) + previousHash + nonce;
  return crypto.createHash('sha256').update(data).digest('hex');
}

module.exports = { calculateHash };

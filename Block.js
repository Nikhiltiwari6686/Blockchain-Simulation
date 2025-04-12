const { calculateHash } = require('./utils');

class Block {
  constructor(index, transactions, previousHash = '', difficulty = 2) {
    this.index = index;
    this.timestamp = Date.now();
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.difficulty = difficulty;
    this.hash = this.mineBlock();
  }

  mineBlock() {
    let hash = this.computeHash();
    while (!hash.startsWith('0'.repeat(this.difficulty))) {
      this.nonce++;
      hash = this.computeHash();
    }
    return hash;
  }

  computeHash() {
    return calculateHash(this.index, this.timestamp, this.transactions, this.previousHash, this.nonce);
  }
}

module.exports = Block;

const Block = require('./Block');

class Blockchain {
  constructor(difficulty = 2) {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = difficulty;
  }

  createGenesisBlock() {
    return new Block(0, ['Genesis Block'], '0', this.difficulty);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(transactions) {
    const newBlock = new Block(
      this.chain.length,
      transactions,
      this.getLatestBlock().hash,
      this.difficulty
    );
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const curr = this.chain[i];
      const prev = this.chain[i - 1];

      if (curr.hash !== curr.computeHash()) {
        console.log(`Block ${i} hash is invalid.`);
        return false;
      }

      if (curr.previousHash !== prev.hash) {
        console.log(`Block ${i} previous hash doesn't match.`);
        return false;
      }
    }
    console.log('Blockchain is valid.');
    return true;
  }

  printChain() {
    for (const block of this.chain) {
      console.log({
        index: block.index,
        timestamp: new Date(block.timestamp).toLocaleString(),
        transactions: block.transactions,
        previousHash: block.previousHash,
        hash: block.hash,
        nonce: block.nonce
      });
    }
  }
}

module.exports = Blockchain;

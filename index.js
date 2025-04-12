const Blockchain = require('./Blockchain');
const myChain = new Blockchain(3);

myChain.addBlock(['Aman pays Rishi 10 BTC']);
myChain.addBlock(['Rishi pays Ajay 5 BTC']);
myChain.addBlock(['Ajay pays Nikhil 2 BTC']);

console.log('\n--- Blockchain ---');
myChain.printChain();

console.log('\n--- Validating Chain ---');
myChain.isChainValid();

console.log('\n--- Tampering with Block 1 ---');
myChain.chain[1].transactions = ['Aman pays Anil 100 BTC'];
myChain.chain[1].hash = myChain.chain[1].computeHash();

console.log('\n--- Revalidating Chain ---');
myChain.isChainValid();

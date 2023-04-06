const express = require('express');
const ethers = require('ethers');

const app = express();

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // change to your own provider endpoint
const privateKey = 'YOUR_PRIVATE_KEY_HERE'; // change to your own private key
const wallet = new ethers.Wallet(privateKey, provider);

const toAddress = '0x1234567890123456789012345678901234567890'; // change to your desired destination address
const amount = ethers.utils.parseEther('1'); // change to your desired transfer amount

app.listen(3000, () => {
  console.log('Server started on port 3000');
  setInterval(() => {
    wallet.sendTransaction({
      to: toAddress,
      value: amount
    })
    .then(transaction => {
      console.log(`Transaction sent with hash: ${transaction.hash}`);
    })
    .catch(error => {
      console.log(`Error sending transaction: ${error.message}`);
    });
  }, 1000);
});

# Sample Project # 1 :- HTML-Javascript-Ethers
# How to connect with Ethereum Wallet MetaMask from web Explorer
# How to execute a Smart Contract function from web Explorer

This project demonstrates a basic HTML, Javascript, Ethers, Hardhat, MetaMask Interaction use case. 
It comes with a sample contract and a script that deploys that contract. 
Hardhat used here to run a local test Node with Test Accounts & local RPC-URL to deploy smart contract.

Try running some of the following tasks:

Install Hardhat package

```shell
npx install hardhat
```

Initialize Hardhat

```shell
npx init hardhat 
```

Run Test Node of Blockchain running locally at your machine

```shell
npx hardhat node 
```
Run script --> to deploy smart Contract on local running Node
for that --> 1st configure Networks ChainId RPC URL in hardhat.config.js properly
             2nd set Smart Contract, Deploy with the help of Ethers Harhat properly in deploy.js 

```shell
npx hardhat run scripts/deploy.js
```

# To execute a Call on Smart Contract function we required

1) SmartContract Address
2) ABI of contract (blue print to interact with Contract)
3) contract function name
4) Node connected to RPC via MetaMask or any RPC URL INFURA - QUICKNODE

# Browserify

With HTML JS **const {ethers} = require("ethers");**  require not understand by Browser
We use browserify package to transpose index.js in bundle to be understandable to Browser

```shell
npx install browserify
npx browserify index.js --standalone bundle -o ./dist/bundle.js
```

It will create a root folder ./dist and file bundle.js
Now in HTML you configure Js src="./dist/bundle.js"
Now Render the all functions from bundle.js instead of index.js

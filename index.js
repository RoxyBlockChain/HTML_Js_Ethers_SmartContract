const {ethers} = require("ethers");

async function connect() {
    if (typeof window.ethereum !== "undefined"){
    await ethereum.request({method: "eth_requestAccounts"});
  }
}
async function execute() {
    // to execute a Tx of any smart contract function we required
    // 1) SmartContract Address
    // 2) ABI of contract blue print to interact with Contract.
    // 3) contract function
    // 4) Node connect to RPC via MetaMask or any RPC URL INFURA - QUICKNODE
    // run a local hardaht NODE to get accounts and depoy contract.
    const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
    const abi = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "addPerson",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameToFavoriteNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "people",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "favoriteNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner(); // get accounts
      const contract = new ethers.Contract(contractAddress, abi, signer);
      await contract.store(44);  
}

module.exports = {
    connect,
    execute,
}
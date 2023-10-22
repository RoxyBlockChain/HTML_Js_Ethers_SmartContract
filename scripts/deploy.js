const {ethers} = require("hardhat");

async function main() {

    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("deploying Contract ......");
    const simpleStorage = await SimpleStorageFactory.deploy();
    console.log("deploy Contract inprogress......");
    await simpleStorage.deployed();
    console.log(`Deployed contract to: ${simpleStorage.address()}`);
} 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
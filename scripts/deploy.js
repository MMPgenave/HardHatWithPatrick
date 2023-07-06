const { ethers, run } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying contract...  ");
  const simpleStorage = await SimpleStorageFactory.deploy({});
  await simpleStorage.deployed();
  console.log(`Deploying contract to :${simpleStorage.address}  `);
  let number = await simpleStorage.retrieve();
  console.log(`number is : ${number}`);
  const TransactionResponse = await simpleStorage.store(196);
  const TnxReceipt  = await TransactionResponse.wait(1);
  number = await simpleStorage.retrieve();
  console.log(`now number is : ${number}`);
  console.log('logging events');
  console.log(`Old number was: ${TnxReceipt.events[0].args.oldNumber.toString()}`)
}
//Verification clould not be Done!, Because @nomiclabs/hardhat-polygonscan is not added yet to hardhat
async function verifiContract(ContractAddress, args) {
  console.log("Auto Verification Started...");
  await run("verify:verify", ContractAddress, args);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

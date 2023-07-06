const { ethers } = require("hardhat");
const fs = require("fs-extra");
//const { Contract } = require("ethers");
async function main() {
  console.log("Deploying...");
  const [owner] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("Bank");
  const Bank = await contractFactory.deploy();
  await Bank.deployed();
  console.log(
    `This contract succesfully deployed by Muhammad @ this address :${Bank.address}`
  );
  console.log(`Owner of this contract is :${owner.address}`);

  //Writing File
  // fs.writeFile("contractAddress.txt", "Bank.address", "utf8", (err) => {
  //   if (err) console.log(err);
  //   console.log("The file has been saved!");
  // });

  //Set the Bank_name
  console.log(`setting bank name`);
  const TnxRes = await Bank.setBankName("Bank Of Kurdistan");
  await TnxRes.wait(1);
  const bank_name = await Bank.bankName();
  console.log(`Bank name set to :${bank_name}`);
  console.log(`Bank Owner is:${await Bank.bankOwner()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

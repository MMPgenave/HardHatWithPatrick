const { task } = require("hardhat/config");

task("blockNumber", "Shows the Current Block Number that mined").setAction(
  async (taskArgs, hre) => {
    const Current_Block_Number = await hre.ethers.provider.getBlockNumber();

    console.log(`Current Block Number is : ${Current_Block_Number}`);
  }
);

module.exports = {
  solidity: "0.8.7",
};

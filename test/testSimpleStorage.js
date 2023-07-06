const { ethers } = require("hardhat");
const { assert } = require("chai");
describe("SimpleStorage", () => {
  console.log("testing initialized....");
  let factory, SimpleStorage;

  beforeEach(async () => {
    factory = await ethers.getContractFactory("SimpleStorage");
    SimpleStorage = await factory.deploy();
  });

  it("the favorateNumber should be 0", async () => {
    const number = await SimpleStorage.retrieve();
    assert.equal(number.toString(), "0");
  });

  it("store function in contract works properly", async () => {
    const txn = await SimpleStorage.store(7);
    await txn.wait();
    const retrivNumber = await SimpleStorage.retrieve();
    assert.equal(retrivNumber, 7);
  });

  it("addPerson should work properly", async () => {
    const txn = await SimpleStorage.addPerson("Muha", 5);
    await txn.wait();
    const firstPerson = await SimpleStorage.people([0]);
    const firstPersonName = firstPerson.name;

    assert(firstPersonName.toString(), "Muha");
  });
});

import { ethers } from "hardhat";

async function main() {
  const Manager = await ethers.getContractFactory("ValleyManager");
  const manager = await Manager.deploy();
  await manager.deployed();

  console.log("Fluido Factory deployed to:", manager.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

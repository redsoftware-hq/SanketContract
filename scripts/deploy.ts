import { ethers } from "hardhat";

async function main() {
  const MetajuiceNFT = await ethers.getContractFactory("MetajuiceNFT");
  const token = await MetajuiceNFT.deploy();
  await token.deployed();
  console.log(`Deployed At ${token.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

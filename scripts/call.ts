import { ethers, upgrades } from "hardhat";

async function main() {
  const Lock = (await ethers.getContractFactory("Lock")).attach(
    "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9"
  );

  const greeting = await Lock.withdraw();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

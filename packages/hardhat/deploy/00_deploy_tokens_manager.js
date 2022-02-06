// deploy/00_deploy_tokens_manager.js

const { ethers, run } = require("hardhat");

const localChainId = "31337";

// const sleep = (ms) =>
//   new Promise((r) =>
//     setTimeout(() => {
//       console.log(`waited for ${(ms / 1000).toFixed(3)} seconds`);
//       r();
//     }, ms)
//   );

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  const talentDaoTokenContract = await deploy("TalentDaoToken", {
    from: deployer,
    args: ["0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b"],
    log: true,
  });

  await deploy("TalentDaoNftToken", {
    from: deployer,
    args: [
      "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b",
      talentDaoTokenContract.address,
    ],
    log: true,
  });

  // Getting a previously deployed contract
  const TalentDAOTokenContract = await ethers.getContract(
    "TalentDaoToken",
    deployer
  );

  const TalentDAONFTTokenContract = await ethers.getContract(
    "TalentDaoNftToken",
    deployer
  );

  await deploy("TalentDaoManager", {
    from: deployer,
    args: [
      "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b", // contract manager
      "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b", // contract owner
      TalentDAOTokenContract.address, // TDAO token address
      TalentDAONFTTokenContract.address, // TDAO NFT token address
    ],
    log: true,
    waitConfirmations: 5,
  });

  const TalentDaoManagerContract = await ethers.getContract(
    "TalentDaoManager",
    deployer
  );

  // Verify from the command line by running `yarn verify`

  // You can also Verify your contracts with Etherscan here...
  // You don't want to verify on localhost
  try {
    if (chainId !== localChainId) {
      await run("verify:verify", {
        address: TalentDAOTokenContract.address,
        contract: "contracts/TalentDaoToken.sol:TalentDaoToken",
        contractArguments: ["0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b"],
      });
      await run("verify:verify", {
        address: TalentDAONFTTokenContract.address,
        contract: "contracts/TalentDaoNftToken.sol:TalentDaoNftToken",
        contractArguments: ["0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b"],
      });
      await run("verify:verify", {
        address: TalentDaoManagerContract.address,
        contract: "contracts/TalentDaoManager.sol:TalentDaoManager",
        contractArguments: [
          "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b", // contract manager
          "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b", // contract owner
          TalentDAOTokenContract.address, // TDAO token address
        ],
      });
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.tags = [
  "TalentDaoToken",
  "TalentDaoNftToken",
  "TalentDaoManager",
];

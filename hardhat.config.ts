import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY = process.env.PRIVATE_KEY;
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: "https://rpc-mumbai.maticvigil.com",
  //     accounts: [`0x${PRIVATE_KEY}`],
  //   },
  // },
  // etherscan: {
  //   apiKey: POLYGONSCAN_API_KEY,
  // },
};

export default config;

import { expect } from "chai";
import { ethers } from "hardhat";

// describe("MetajuiceNFT Contract", () => {
//   it("NFT can be minted", async () => {
//     const NFT = await ethers.getContractFactory("MetajuiceNFT");
//     const nftContract = await NFT.deploy();
//     const recipient = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
//     const recipientSigner = await ethers.getSigner(recipient);
//     const tokenURI = "cid/test.png";
//     const txResponse = await nftContract
//       .connect(recipientSigner)
//       .mintNFT(recipient, tokenURI);
//     const txReceipt = await txResponse.wait();
//     const [transferEvent] = txReceipt.events;
//     const { tokenId } = transferEvent.args;
//     expect(tokenId).to.equal(1);
//   });
//   it("Can be burned", async () => {
//     const NFT = await ethers.getContractFactory("MetajuiceNFT");
//     const nftContract = await NFT.deploy();
//     const recipient = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
//     const recipientSigner = await ethers.getSigner(recipient);
//     const tokenURI = "cid/test.png";
//     const txResponse = await nftContract
//       .connect(recipientSigner)
//       .mintNFT(recipient, tokenURI);
//     const txReceipt = await txResponse.wait();
//     const [transferEvent] = txReceipt.events;
//     const { tokenId } = transferEvent.args;
//     await nftContract.connect(recipientSigner).burn(tokenId);
//   });
//   it("Can be burned by those who minted", async () => {
//     const NFT = await ethers.getContractFactory("MetajuiceNFT");
//     const nftContract = await NFT.deploy();
//     const recipient = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
//     const recipientSigner = await ethers.getSigner(recipient);
//     const recipient2 = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
//     const signer2 = await ethers.getSigner(recipient2);
//     const tokenURI = "cid/test.png";
//     const txResponse = await nftContract
//       .connect(recipientSigner)
//       .mintNFT(recipient, tokenURI);
//     const txReceipt = await txResponse.wait();
//     const [transferEvent] = txReceipt.events;
//     const { tokenId } = transferEvent.args;
//     await expect(nftContract.connect(signer2).burn(tokenId)).to.be.reverted;
//   });
// });

// describe("Redsoft token", () => {
//   it("Can be deployed", async () => {
//     const Token = await ethers.getContractFactory("MembershipNFTRedsoft");
//     const coinPrice = 0;
//     const token = await Token.deploy(coinPrice);
//     await token.deployed();
//     console.log(`Deployed to ${token.address}`);
//   });
// });

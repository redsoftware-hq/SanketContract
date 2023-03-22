// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error NotOwner();

contract MetajuiceNFT is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;

  uint256 public listingPrice;
  uint256 public itemCounter;
  
  struct ListedNFT {
    uint256 itemId;
    address nftAddress;
    uint256 tokenId;
    address payable seller;
    address owner;
    uint256 price;
  }
  
  mapping(uint256 => ListedNFT) private listedNfts;
  
  
  event NFTMinted(uint256 indexed tokenId);
  
  event NFTListed(
    uint256 indexed itemId,
    address indexed nftAddress,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint256 price
  );

  event DelistNFT(
    address indexed sender,
    address indexed nftAddress,
    uint256 indexed tokenId
  );

  modifier isOwner(
    address nftAddress,
    uint256 tokenId,
    address spender
  ) {
    IERC721 nft = IERC721(nftAddress);
    address nftOwner = nft.ownerOf(tokenId);
    if (spender != nftOwner) {
      revert NotOwner();
    }
    _;
  }

  constructor() public ERC721("MetajuiceNFT", "MJT") {
    itemCounter = 0;
  }

  function mintNFT(
    address recipient,
    string memory tokenURI
  ) public returns (uint256) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);
    emit NFTMinted(newItemId);
    return newItemId;
  }

  function burn(
    address nftAddress,
    uint256 tokenId
  ) public isOwner(nftAddress, tokenId, msg.sender) {
    super._burn(tokenId);
  }
   
  function listNFT(
    address nftAddress,
    uint256 tokenId,
    uint256 price
  ) public payable {
    
    require(price > 0, "Price must be greater than 0");

    listedNfts[itemCounter] = ListedNFT(
      itemCounter,
      nftAddress,
      tokenId,
      payable(msg.sender),
      address(0),
      price
    );
    
    // _transfer(msg.sender, nftAddress, tokenId);
    
    emit NFTListed(
      itemCounter,
      nftAddress,
      tokenId,
      msg.sender,
      address(0),
      price
    );
    
    itemCounter += 1;
  }

  function getListedNFT(
    uint256 tokenId
  ) public view returns (ListedNFT memory nft) {
    nft = listedNfts[tokenId];
    return nft;
  }
  
  function delistNFT(
    address nftAddress,
    uint256 tokenId
  ) public isOwner(nftAddress, tokenId, msg.sender) {
    delete (listedNfts[tokenId]);
    emit DelistNFT(msg.sender, nftAddress, tokenId);
  }
  
  function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}

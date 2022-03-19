import React from "react";
import "./CollectionCard.css";
import weth from "../assets/weth.png";

// testnet opensea https://testnets.opensea.io/0x69f24f7e3c183605dd4b3205d4623ef4df2ce9ed
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="punkImage" />
      <div className="details">
        <div className="name">
          {name} <div className="id">•#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt="weth" className="wethImage" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;

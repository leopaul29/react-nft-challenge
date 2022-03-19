import React, { useEffect, useState } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_url}
              alt="activePunk"
              className="selectedPunk"
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber">•#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="profile_image" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameandHandle">
                <div className="ownerAddress">{activePunk.owner.address}</div>
                <div className="ownerHandle">@leopaul29</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="instagramLogo" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="twitterLogo" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="moreIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";
import { keepTheme } from "./utils/themes";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    // url sample: https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=%7B%7Byour_collection_address_here%7D%7D
    // use project url blockchain address and not personal wallet address
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://rinkeby-api.opensea.io/api/v1/assets?order_direction=asc&asset_contract_address=0x56e6B5dFd5447f23d8a192FcD304A9656CCdD1a6&offset=0&limit=20"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;

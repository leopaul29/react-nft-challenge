import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    // url sample: https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=%7B%7Byour_collection_address_here%7D%7D
    // use project url blockchain address and not personal wallet address
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x56e6B5dFd5447f23d8a192FcD304A9656CCdD1a6"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;

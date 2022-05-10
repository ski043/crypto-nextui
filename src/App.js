import { Input, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coins from "./components/Coins";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div className="main-container">
        <Text h1 css={{ textAlign: "center", my: "20px" }}>
          Crypto Tracker 🚀
        </Text>
        <Input
          bordered
          color="success"
          size="lg"
          placeholder="Your Coin..."
          css={{ mb: "50px" }}
        />
      </div>
      {coins.map((coin) => (
        <>
          <Coins key={coin.id} {...coin} />
          <Spacer y={1.5} />
        </>
      ))}
    </div>
  );
}

export default App;

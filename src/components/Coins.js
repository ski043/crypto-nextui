import { Card, Text } from "@nextui-org/react";
import React from "react";

const Coins = ({ name }) => {
  return (
    <div>
      <Card css={{ mw: "800px", margin: "auto" }}>
        <Text h3 weight="hairline" size={16} fontSizes="tiny">
          Hello how are you
        </Text>
      </Card>
    </div>
  );
};

export default Coins;

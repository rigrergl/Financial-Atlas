import React from "react";
import Prize from "./Prize";

export default function PrizeList() {
  const buyPrize = (e) => {
      console.log("Bought Prize")
      console.log(e.target.id)
  };

  let prizes = [
    {
      id: 1,
      cost: 5000,
      name: "PS5",
      src: "./images/ps5.jpg",
      bought: false,
    },
    {
      id: 2,
      cost: 10000,
      name: "Nintendo Switch",
      src: "./images/nintendo.jpg",
      bought: false,
    },
    {
      id: 3,
      cost: 20000,
      name: "Xbox Series X",
      src: "./images/xboxX.jpg",
      bought: false,
    },
  ];

  return (
    <div className="bottom">
      {prizes
        .filter((prize) => {
          if (!prize.bought) return prize;
        })
        .map(({ cost, name, src, id }) => (
          <div key={id}>
            <Prize id={id} cost={cost} name={name} src={src} buyPrize={buyPrize}/>
          </div>
        ))}
    </div>
  );
}

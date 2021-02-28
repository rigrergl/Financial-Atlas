import React from "react";
import Prize from "./Prize";


export default function PrizeList() {
  const buyPrize = (e) => {};

  let prizes = [
    {
      cost: 5000,
      name: "PS5",
      src: "./images/ps5.jpg",
      bought: false,
    },
    {
      cost: 10000,
      name: "Nintendo Switch",
      src: "./images/nintendo.jpg",
      bought: false,
    },
    {
      cost: 20000,
      name: "Xbox Series X",
      src: "./images/xboxX.jpg",
      bought: false,
    },
  ];

  return (
    <div>
      <h1>PrizeList:</h1>

      {prizes
        .filter((prize) => {
          if (!prize.bought) return prize;
        })
        .map(( {cost, name, src} ) => (
           <div>
               <Prize cost={cost} name={name} src={src}/>
           </div>
          ))}
    </div>
  );
}

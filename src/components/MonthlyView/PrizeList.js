import React from "react";
import Prize from "./Prize";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWon, decrementChecking } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


export default function PrizeList() {
  const [show, setShow] = useState(false);
  const [prizesLeft, setPrizesLeft] = useState(3);
  const dispatch = useDispatch();
  let history = useHistory();
  const checkingAmt = useSelector((state) => state.checkingAmt);

  let prizes = [
    {
      id: 1,
      cost: 2000,
      name: "PS5",
      src: "./images/ps5.jpg",
      bought: false,
    },
    {
      id: 2,
      cost: 2000,
      name: "Nintendo Switch",
      src: "./images/nintendo.jpg",
      bought: false,
    },
    {
      id: 3,
      cost: 2000,
      name: "Xbox Series X",
      src: "./images/xboxX.jpg",
      bought: false,
    },
  ];

  const buyPrize = (e) => {
    // console.log(prizes[e.target.id - 1].bought)
    
    // console.log(prizes);

    if (checkingAmt < prizes[e.target.id - 1].cost) {
      console.log("failed to pay");
      setShow(true);
      return;
    } else {
      // prizes = prizes.splice(1, e.target.id - 1);
      prizes[e.target.id - 1].bought = true;
      setPrizesLeft(prizesLeft - 1);
      console.log(prizesLeft);

      let i;
      for(i = 0; i < prizes[e.target.id - 1].cost; i++){
        dispatch(decrementChecking());
      }

      if (prizesLeft == 0) {
        dispatch(setWon());
        console.log("won");
        history.push("/Win");
      }
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="bottom">
      {prizes
        .filter((prize) => {
          if (prize.bought != true) {
            return prize;
          }
        })
        .map(({ cost, name, src, id, bought }) => (
          <Prize
            key={id}
            id={id}
            cost={cost}
            name={name}
            src={src}
            buyPrize={buyPrize}
          />
        ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>You do not have enough money for this item right now</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

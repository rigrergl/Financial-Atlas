import React from "react";
import "../../styles/MonthlyView.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { decrementPrizes } from "../../redux/actions";
import NumberFormat from "react-number-format";

const Prize = ( {cost, name, src, id, buyPrize} ) => {
  return (
    <Card style={{ height: "45vh", width: "25vw", border: "2px solid #6B8EFF" }}>
      <Card.Img
        variant="top"
        src={src}
        style={{ height: "50%" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          <NumberFormat
            value={cost}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            className="prizePrice"
          />
        </Card.Text>
        <Button id={id} onClick={buyPrize} variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Prize;

import React from "react";
import "../../styles/MonthlyView.css";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { decrementPrizes } from "../../redux/actions";
import NumberFormat from "react-number-format";

const Prize = () => {
  return (
    <div className="bottom-container">
      <div className="bottom">
        <Card style={{ width: "18rem", border: "2px solid #6B8EFF" }}>
          <Card.Img
            variant="top"
            src="./images/ps5.jpg"
            style={{ height: "50%" }}
          />
          <Card.Body>
            <Card.Title>PS5</Card.Title>

            <Card.Text>
              <NumberFormat
                value={25}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                className="prizePrice"
              />
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid #6B8EFF" }}>
          <Card.Img
            variant="top"
            src="./images/nintendo.jpg"
            style={{ height: "50%" }}
          />
          <Card.Body>
            <Card.Title>Nintendo Switch</Card.Title>

            <Card.Text>
              <NumberFormat
                value={25}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                className="prizePrice"
              />
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "2px solid #6B8EFF" }}>
          <Card.Img
            variant="top"
            src="./images/xboxX.jpg"
            style={{ height: "50%" }}
          />
          <Card.Body>
            <Card.Title>Xbox Series X</Card.Title>

            <Card.Text>
              <NumberFormat
                value={25}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                className="prizePrice"
              />
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Prize;

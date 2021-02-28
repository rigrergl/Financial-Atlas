import React from "react";
import Heading from "./Heading";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Transfer = ( {destination} ) => {
  const onTransfer = () => {

  }

  return (
    <div>
      <p>
        <Heading />
      </p>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="danger">Cancel</Button>{" "}
      <Button variant="success">Transfer to {destination}</Button>{" "}
    </div>
  );
};

export default Transfer;

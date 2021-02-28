import React from "react";
import Heading from "./Heading";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementChecking,
  decrementChecking,
  incrementSavings,
  decrementSavings,
} from "../../redux/actions";

const Transfer = ({ destination }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const round = useSelector((state) => state.round);
  let isSavingsOpen = round === 0;

  const onSubmit = (e) => {
    console.log(value);
    if(destination==="Savings"){
      let i;
      for(i = 0; i < value; i++){
        dispatch(decrementChecking());
        dispatch(incrementSavings());
      }      
    }
    else if(isSavingsOpen){
      let i;
      for(i = 0; i < value; i++){
        dispatch(decrementSavings());
        dispatch(incrementChecking());
      }  
    }
  };


  const onChange = (e) => {
      setValue(e.target.value)
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
        <FormControl
          onChange={onChange}

          id="input"
          type="number"
          aria-label="Amount (to the nearest dollar)"
        />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="danger">Cancel</Button>{" "}
      {(!isSavingsOpen && destination==="Checking")? "": <Button onClick={onSubmit} variant="success">
        Transfer to {destination}
      </Button>}
      
    </div>
  );
};

export default Transfer;

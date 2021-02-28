import Card from "react-bootstrap/Card";
import NumberFormat from 'react-number-format';
import Button from "react-bootstrap/Button"

export default function Income( {MONTHLY_INCOME, advanceMonth} ) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Monthly Income</Card.Title>
        <Card.Text>
          <NumberFormat
            value={MONTHLY_INCOME}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            className="income"
          />
        </Card.Text>
        <Button onClick={advanceMonth} className="advanceButton">
              Advance Month
            </Button>
      </Card.Body>
    </Card>
  );
}

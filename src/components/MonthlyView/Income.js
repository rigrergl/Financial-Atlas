import Card from "react-bootstrap/Card";
import NumberFormat from 'react-number-format';

export default function Income() {
  const MONTHLY_INCOME = 2000;

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
      </Card.Body>
    </Card>
  );
}

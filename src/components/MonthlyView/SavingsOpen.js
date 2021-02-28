import Alert from "react-bootstrap/Alert";

export default function SavingsOpen({ isSavingsOpen, round }) {
    let alertType = isSavingsOpen? "success" : "danger";

  return (
    <div>
      <Alert variant={alertType}>
        {isSavingsOpen? <h1>You can withdraw from savings!</h1> : <h1>{round} more months until you can withdraw from savings</h1>}
      </Alert>
    </div>
  );
}

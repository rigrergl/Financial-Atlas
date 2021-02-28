import Alert from "react-bootstrap/Alert";

export default function SavingsOpen({ isSavingsOpen }) {
    let alertType = isSavingsOpen? "success" : "danger";

  return (
    <div>
      <Alert variant={alertType}>
      <h1>{`Is savings open: ${isSavingsOpen}`}</h1>
      </Alert>
    </div>
  );
}

import React from "react";

function Heading( {firstName} ) {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }

  return (
    <div>
      <h1 className="heading">
        {greeting}, <i>{firstName}</i>{" "}
      </h1>
    </div>
  );
}

export default Heading;

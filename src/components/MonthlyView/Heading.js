import React from "react";

function Heading() {
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
        {greeting}, <i>user</i>{" "}
      </h1>
      <p>How much money would you like to transfer today?</p>
    </div>
  );
}

export default Heading;

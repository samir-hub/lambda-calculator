import React from "react";
import "./NumberButton.css"

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick={() =>props.addNumber(props.textContent)} className="number"> {props.textContent} </button>}
    </>
  );
};

export default NumberButton;
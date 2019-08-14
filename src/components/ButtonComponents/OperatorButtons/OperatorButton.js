import React from "react";
import "./OperatorButton.css"
const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.addOperator(props.operator.value)} className="operator">{props.textContent}</button>
    </>
  );
};

export default OperatorButton;
import React from "react";
import "./SpecialButton.css"
const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="special"> {props.textContent} </button>}
    </>
  );
};

export default SpecialButton;
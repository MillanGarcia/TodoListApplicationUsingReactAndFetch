import propTypes from "prop-types";
import React from "react";

const ButtonElem = (props) => {
   /* var input = document.getElementById("myInput");
	input.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
		  event.preventDefault();
		  document.getElementById("myBtn").click();
		}
	  });*/
    return (
    <>
        <button onClick={props.onClick}>{props.value}</button>
    </>
    )
}
export default ButtonElem;
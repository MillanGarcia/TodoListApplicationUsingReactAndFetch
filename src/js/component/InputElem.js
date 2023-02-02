import React from "react";

const InputElem = (props) => {

   return <>
        <input className="borde m-auto w-100" placeholder={props.placeholder} type="text" onChange={props.onChange} value={props.value} 
        />
        </>  
}

export default InputElem;
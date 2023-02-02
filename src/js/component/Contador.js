import React from "react";

const Contador = (props) => {
    return <>
        <div className="d-block">
            <div style={{backgroundColor:"white",width:"400px",height:"40px",padding:"8px",boxShadow:"0px 5px  grey"}}>
            
                <h1>{props.numero}</h1>
            
                <div style={{backgroundColor:"blue",width:"390px",height:"5px",padding:"0px",}}>
                </div>
            </div>
        </div>
    </>
}

export default Contador;
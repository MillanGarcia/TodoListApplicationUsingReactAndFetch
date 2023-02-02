import React from "react";
import Contador from "./Contador.jsx"
const TodoList = (props) => {
    return <>
        {
        props.tasks.map((task) => <div className="w-100 text-start  d-flex" style={{backgroundColor:"white",height:"40px",padding:"8px",boxShadow:"0px 0px 10px grey",border:"1px solid grey"}}>
                                    <div className="w-50">
                                        {task.text} 
                                    </div>
                                    <div className="w-50 justify-content-end">
                                        <button style={{float:"right"}} type="button" onClick={() => props.removeTask(task.id)}>X</button>
                                    </div>
                                </div>)}
        
        
        <div className="d-block">
            <div className="bg-white" style={{width:"400px",height:"35px",padding:"8px",textAlign:"left",border:"1px solid black",boxShadow:"0px 10px 10px grey"}}>
            
                    <h6><b>{props.numero}</b></h6>
            
                <div style={{backgroundColor:"lightgrey",width:"390px",height:"5px",margin:"auto",border:"1px solid black",borderTopStyle:"none",boxShadow:"-0px 5px 5px grey",marginLeft:"-5px",marginTop:"-2px"}}>
                </div>
                <div style={{backgroundColor:"lightgrey",width:"380px",height:"5px",margin:"auto",border:"1px solid black",borderTopStyle:"none",boxShadow:"0px 5px 5px grey"}}>
                </div>
            </div>
        </div>
        
        
    </>
}

export default TodoList;
import React from "react";

function Displaydetail(props){
    return <div className="display">
        <h1>{props.firstname} {props.lastname}</h1>
        <h4>Email id: {props.email}</h4>
        <p>{props.message}</p>
    </div>
}

export default Displaydetail;
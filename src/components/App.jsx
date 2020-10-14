import React from "react";
import Createdetail from "./Createdetail";
import Displaydetail from "./Displaydetail";



function App(){ 

    const [details, setDetails] = React.useState([]);

    function addDetail(newDetail){
        console.log(newDetail);
        setDetails(preDetails => {
            return [...preDetails, newDetail]
        });
    }


    return <div className="form-box">
        <Createdetail onAdd={addDetail} />
        {details.map((detail)=>{
            return (<Displaydetail 
            firstname={detail.firstname}
            lastname={detail.lastname}
            email={detail.email}
            message={detail.message}
            /> )
        })}
    </div>
};

export default App;
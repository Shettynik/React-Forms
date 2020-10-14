import React from "react";
import Header from "./Header";

function Createdetail(props){

    const [detail, setDetail] = React.useState({
        firstname :"",
        lastname :"",
        email: "",
        message:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setDetail(preDetail => {
            return {
                ...preDetail,
                [name]: value
            }
        });
    };

    function submitDetails(event){
        props.onAdd(detail);
        event.preventDefault();
        setDetail({
            firstname: "",
            lastname: "",
            email: "",
            message:""
        });
    };

    return (<form className="decor">
    <div className="form-left-decoration"></div>
    <div className="form-right-decoration"></div>
    <div className="circle"></div>
    <div className="form-inner">
      <Header />
      <input
       type="text"
       placeholder="Firstname"
       name="firstname"
       onChange={handleChange}
       value={detail.firstname}
       />
      <input
       type="text"
       placeholder="Lastname"
       name="lastname"
       value={detail.lastname}
       onChange={handleChange}
       />
      <input
       type="email"
       placeholder="Email"
       name="email" 
       value={detail.email}
       onChange={handleChange}
       />
      <textarea
       placeholder="Message..." 
       rows="5"
       name="message"
       value={detail.message}
       onChange={handleChange}
       ></textarea>
      <button type="submit" onClick={submitDetails}>Submit</button>
    </div>
  </form>)

    // return ( 
    //     <div className="create-details">
    //         <form method="POST">
    //             <input
    //              type="text"
    //              placeholder="firstname"
    //              name="firstname"
    //              onChange={handleChange}
    //              value={detail.firstname}
    //               />
    //             <input
    //              type="text"
    //              placeholder="lastname"
    //              name="lastname"
    //              value={detail.lastname}
    //              onChange={handleChange}
    //              />
    //             <input
    //              type="text"
    //              placeholder="age"
    //              name="age"
    //              value={detail.age}
    //              onChange={handleChange}
    //              />
    //             <input 
    //              type="email"
    //              placeholder="email id"
    //              name="email"
    //              value={detail.email}
    //              onChange={handleChange}
    //              />
    //             <button onClick={submitDetails}>Submit</button>
    //         </form>
    //     </div>
    // )
}

export default Createdetail;
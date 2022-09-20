import React from "react";
import labels from "../../../labels";
import './RegisterSuccess.scss'

const RegisterSuccess =()=>{
    return(
        <div className="registerSuccess">
<div className="registerSuccess__box">
    <h2 className="registerSuccess__box-title" >{labels.registerSuccess.title}</h2>
    <p>{labels.registerSuccess.text}</p>
</div>
        </div>
    )
}

export default RegisterSuccess

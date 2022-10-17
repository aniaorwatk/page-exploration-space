import React from "react";
import { useParams } from "react-router-dom";
import data from "./../../../data/information"

const SingleArticle =()=>{
    const para = useParams()
    console.log(para);
    return(
        <h3>ulalalsingle</h3>
    )
}
export default SingleArticle
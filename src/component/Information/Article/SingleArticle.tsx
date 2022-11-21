import React from "react";
import { useParams } from "react-router-dom";
import data from "./../../../data/information"

const SingleArticle =()=>{
    const para = useParams()
    console.log(para);
    return(
        <>
        <h3>{para.id}</h3>
        <h2>{para.fullAricle}</h2>
        </>
    )
}
export default SingleArticle
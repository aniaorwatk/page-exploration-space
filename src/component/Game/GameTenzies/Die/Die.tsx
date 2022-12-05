interface IDieType{
    value:number;
}

const Die =({value}:IDieType)=>{
    return(
        <div className="die">{value}</div>
    )
}

export default Die
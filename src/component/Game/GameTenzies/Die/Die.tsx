import "./Die.scss"

interface IDieType {
  value: number;
  isHeld:boolean;
  funClick: (id:number)=>void;
  id: number
}

const Die = ({ value, isHeld, funClick, id }: IDieType) => {

    const style ={
        backgroundColor: isHeld ? "#12B3A0" : "white"
    }

  return (
    <div onClick={()=>funClick(id)} className="dieFace" style={style} >
      <h3 className="dieFace__num">{value}</h3>
    </div  >
  );
};

export default Die;

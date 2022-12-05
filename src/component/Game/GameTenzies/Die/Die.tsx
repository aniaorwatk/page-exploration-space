import "./Die.scss"

interface IDieType {
  value: number;
}

const Die = ({ value }: IDieType) => {
  return (
    <div className="dieFace">
      <h3 className="dieFace__num">{value}</h3>
    </div>
  );
};

export default Die;

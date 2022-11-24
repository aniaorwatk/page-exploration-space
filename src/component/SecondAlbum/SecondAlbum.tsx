import data from "../../data/album";
import ButtonReturn from "../Buttons/ButtonReturn/ButtonReturn";
import "./SecondAlbum.scss";

const SecondAlbum = () => {
  const photos = data.map((item) => {
    return (
      <div className="secondAlbum__box-album--photo" key={item.id}>
        <p className="secondAlbum__box-album--title">{item.title}</p>
        <img className="secondAlbum__box-img" src={item.src} alt={item.title} />
      </div>
    );
  });
  
  return (
    <div className="secondAlbum">
      <div className="secondAlbum__box">
        <ButtonReturn />
        <div className="secondAlbum__box-album">{photos}</div>
      </div>
    </div>
  );
};

export default SecondAlbum;

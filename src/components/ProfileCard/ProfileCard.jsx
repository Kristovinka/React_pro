import Button from "../Button/Button";
import "./styles.css";
import { hwData } from "./data";

function ProfileCard() {
  return (
    <div className="hw-card-wrapper">
      <img src={hwData.avatar} />
      <h3>Имя и фамилия: {hwData.name}</h3>
      <div>Род деятельности: {hwData.occupation}</div>
      <div>Хобби: {hwData.hobby}</div>
      <Button />
    </div>
  );
}

export default ProfileCard;

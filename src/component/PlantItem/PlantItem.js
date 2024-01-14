import CareScale from '../CareScale/CareScale';
import './PlantItem.css';

const PlantItem = ({ name, cover, id, light, water }) => {
  return (
    <li key={id} className="jh-plant-item">
      <img className="jh-plant-item-cover" src={cover} alt="cover-icon" />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;

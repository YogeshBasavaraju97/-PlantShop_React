import React from 'react';
import { plantList } from '../../data/plantList.js';
import PlantItem from '../PlantItem/PlantItem.js';
import './ShoppingList.css';

const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="jh-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <li key={id} className="jh-plant-item">
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

import React, { useState } from 'react';
import StationeryKit from '../../components/StationeryBuilder/StationeryKit/StationeryKit';
import StationeryControls from '../../components/StationeryBuilder/StationeryControls/StationeryControls';
import classes from './StationeryBuilder.module.css';
const PRICES = {
  notebook: 10,
  pencil: 5,
  album: 45,
  eraser: 20,
  ruler: 20,
  scotch: 25,

}
export default () => {

  const [items, setItems] = useState({
    notebook: 0,
    pencil: 0,
    album: 0,
    eraser: 0,
    ruler: 0,
    scotch: 0,

  });
  const [price, setPrice] = useState(10);

  function addItems(type) {
    const newItems = { ...items };
    newItems[type]++;
    setItems(newItems);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }
  function removeItems(type) {
    if (items[type] >= 1) {
      const newItems = { ...items };
      newItems[type]--;
      setItems(newItems);


      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    };
  }





  return (
    <div className={classes.StationeryBuilder}>
      <StationeryKit price={price} items={items} />
      <StationeryControls items={items}
        addItems={addItems}
        removeItems={removeItems} />
    </div>
  );
};




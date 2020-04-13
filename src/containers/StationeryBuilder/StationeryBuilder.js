import React, { useState } from 'react';
import StationeryKit from '../../components/StationeryBuilder/StationeryKit/StationeryKit';
import StationeryControls from '../../components/StationeryBuilder/StationeryControls/StationeryControls';
import classes from './StationeryBuilder.module.css';

export default () => {
  const [items, setItems] = useState({
    notebook: 3,
    pencil: 14,
    book: 8,
  });
  function addItems(type) {
    const newItems = { ...items };
    newItems[type]++;
    setItems(newItems);
  }
  function removeItems(type) {
    if (items[type] >= 1) {
      const newItems = { ...items };
      newItems[type]--;
      setItems(newItems);
    };
  }

  return (
    <div className={classes.StationeryBuilder}>
      <StationeryKit items={items} />
      <StationeryControls addItems={addItems} removeItems={removeItems} />
    </div>
  );
};




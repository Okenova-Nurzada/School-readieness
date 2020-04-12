import React, { useState } from 'react';
import StationeryKit from '../../components/StationeryBuilder/StationeryKit/StationeryKit';
import classes from './StationeryBuilder.module.css';

 export default () => {
   const [items, setItems] = useState ({
     notebook : 3, 
     pencil :14,
     book : 8 ,
   });

   return( 
   <div className={classes.StationeryBuilder}>
     <StationeryKit  items={items} />
     StationeryControls
   </div>
   );
   };
   

 

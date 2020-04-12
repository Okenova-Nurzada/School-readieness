import React from 'react';
import StationeryKit from '../../components/StationeryBuilder/StationeryKit/StationeryKit'
import classes from './StationeryBuilder.module.css';

 export default () => (
   <div className={classes.StationeryBuilder}>
     <StationeryKit />
     StationeryControls
   </div>
 );
 

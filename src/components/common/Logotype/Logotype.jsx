import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logotype.module.css';

const Logotype = (props) => {
   return (
      <div className={s.block}>
         <NavLink to='/'>CONCEPT</NavLink>
      </div>
   );
}


export default Logotype;
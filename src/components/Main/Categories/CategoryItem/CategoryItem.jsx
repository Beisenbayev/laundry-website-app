import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoryItem.module.css';

const CategoryItem = (props) => {
   return (
      <NavLink to={`/services/${props.id}`}
         className={s.block}
         title={props.description} >
         <div className={s.picture}>
            <img src={`https://api.doover.tech${props.picture}`} alt="" />
         </div>
         <h3>{props.name}</h3>
      </NavLink>
   );
}


export default CategoryItem;
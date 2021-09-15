import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './StyledLink.module.css';

const StyledLink = ({ children, ...props }) => {
   return (
      <NavLink className={s.block} {...props}
         activeClassName={s.active}>
         {children}
      </NavLink>
   );
}


export default StyledLink;
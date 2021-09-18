import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import s from './UserPanel.module.css';

const UserPanel = ({ username, ...props }) => {
   return (
      <NavLink to='/profile' className={s.block}>
         <span>{username}</span>
         <i><BiUserCircle /></i>
      </NavLink>
   );
}


export default UserPanel;
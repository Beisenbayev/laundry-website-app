import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import s from './UserPanel.module.css';

const UserPanel = ({ props }) => {
   const profile = useSelector(state => state.profile.userData);
   const username = profile ? profile.username : null;

   return (
      <NavLink to='/profile' className={s.block}>
         <span>{username ? username : 'Войти'}</span>
         <i><BiUserCircle /></i>
      </NavLink>
   );
}


export default UserPanel;
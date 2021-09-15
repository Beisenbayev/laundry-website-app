import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import s from './UserPanel.module.css';

const UserPanel = ({ username, ...props }) => {
   return (
      <div className={s.block}>
         <span>{username ? username : 'Войти'}</span>
         <i><BiUserCircle /></i>
      </div>
   );
}


export default UserPanel;
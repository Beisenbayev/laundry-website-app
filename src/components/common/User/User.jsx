import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import s from './User.module.css';

const User = ({ username, ...props }) => {
   return (
      <div className={s.block}>
         <span>{username ? username : 'Войти'}</span>
         <i><BiUserCircle /></i>
      </div>
   );
}


export default User;
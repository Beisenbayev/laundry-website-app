import React from 'react';
import {
   FaQuestion,
   FaTimes
} from 'react-icons/fa';
import cn from 'classnames';
import s from './ControlPanel.module.css';

export const CloseButton = (props) => {
   return (
      <button className={cn(s.button, s.CloseButton)} {...props}>
         <FaTimes />
      </button>
   );
}

export const DescriptionButton = (props) => {
   return (
      <button className={cn(s.button, s.DescriptionButton)} {...props}>
         <FaQuestion />
      </button>
   );
}
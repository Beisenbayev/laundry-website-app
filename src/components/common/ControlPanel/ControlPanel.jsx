import React from 'react';
import {
   FaQuestion,
   FaTimes
} from 'react-icons/fa';
import cn from 'classnames';
import s from './ControlPanel.module.css';

export const CloseButton = (props) => {
   return (
      <div className={cn(s.button, s.CloseButton)}>
         <FaQuestion />
      </div>
   );
}

export const DescriptionButton = (props) => {
   return (
      <div className={cn(s.button, s.DescriptionButton)}>
         <FaTimes />
      </div>
   );
}
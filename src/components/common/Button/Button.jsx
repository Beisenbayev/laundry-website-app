import React from 'react';
import cn from 'classnames';
import s from './Button.module.css';

const Button = (text, classNames, ...props) => {
   return (
      <button className={cn(s.block, classNames)}>{text}</button>
   );
}


export default Button;
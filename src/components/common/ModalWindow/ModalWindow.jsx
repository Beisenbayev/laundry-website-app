import React from 'react';
import s from './ModalWindow.module.css';

const ModalWindow = (props) => {
   return (
      <div className={s.block}>
         <div className={s.content}>
            {props.children}
         </div>
      </div>
   );
}


export default ModalWindow;
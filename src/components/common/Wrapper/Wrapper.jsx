import React from 'react';
import s from './Wrapper.module.css';

const Wrapper = (props) => {
   return (
      <div className={s.block}>
         {props.children}
      </div>
   );
}


export default Wrapper;
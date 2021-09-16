import React from 'react';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import s from './Categories.module.css';

const Categories = (props) => {
   return (
      <div className={s.block}>

      </div>
   );
}


export default compose(
   withAuthRedirect
)(Categories);;
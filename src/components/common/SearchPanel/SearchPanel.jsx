import React from 'react';
import { FiSearch } from 'react-icons/fi';
import s from './SearchPanel.module.css';

const SearchPanel = (props) => {
   return (
      <div className={s.block}>
         <i><FiSearch /></i>
         <input type='search' placeholder='Найти вещь' />
      </div>
   );
}


export default SearchPanel;
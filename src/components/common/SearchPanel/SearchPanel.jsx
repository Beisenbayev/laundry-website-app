import React from 'react';
import { FiSearch } from 'react-icons/fi';
import s from './Search.module.css';

const Search = (props) => {
   return (
      <div className={s.block}>
         <i><FiSearch /></i>
         <input type='search' placeholder='Найти вещь' />
      </div>
   );
}


export default Search;
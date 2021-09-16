import React from 'react';
import { useHistory } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import s from './SearchPanel.module.css';

const SearchPanel = (props) => {
   const history = useHistory();

   const handleChange = (event) => {
      if (event.currentTarget.value === '') history.push('/');
      else history.push(`/search/${event.currentTarget.value}`);
   }

   return (
      <div className={s.block}>
         <i><FiSearch /></i>
         <input type='search' 
            placeholder='Найти вещь'
            onChange={handleChange} />
      </div>
   );
}


export default SearchPanel;
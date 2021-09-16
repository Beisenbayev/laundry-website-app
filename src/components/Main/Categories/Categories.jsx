import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import {
   setCategoriesThunkCreater as setCategories
} from '../../../redux/reducers/products-reducer.js';
import s from './Categories.module.css';

import CategoryItem from './CategoryItem/CategoryItem';

const Categories = (props) => {
   const dispatch = useDispatch();
   const categories = useSelector(state => state.products.categories);

   const categoryItems = categories ? categories.map(category => {
      return <CategoryItem key={category.uuid}
         id={category.uuid}
         name={category.name}
         picture={category.picture}
         description={category.description} />
   }) : null;

   useEffect(() => {
      dispatch(setCategories());
   }, [])

   return (
      <div className={s.block}>
         <h1>Категории</h1>
         <div className={s.categoryItems}>
            {categoryItems}
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Categories);;
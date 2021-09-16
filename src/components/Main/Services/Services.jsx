import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   setProductsThunkCreater as setProducts
} from '../../../redux/reducers/products-reducer.js';
import s from './Services.module.css';

import ServiseItem from './ServiseItem/ServiseItem';

const Services = (props) => {
   const dispatch = useDispatch();
   const categories = useSelector(state => state.products.categories);
   const services = useSelector(state => state.products.productsList);

   const { categoryId } = useParams();
   const categoryName = categories.filter(category => category.uuid === categoryId)[0].name;

   const serviseItems = services ? services.map(servise => {
      return <ServiseItem key={servise.uuid}
         id={servise.id}
         category={servise.category}
         name={servise.name}
         picture={servise.picture}
         price={servise.price}
         duration={servise.duration}
         hint={servise.hint} />
   }) : null;

   useEffect(() => {
      dispatch(setProducts(categoryId, ''));
   }, [categoryId]);

   return (
      <div className={s.block}>
         <h1>Главная/ <span>{categoryName}</span></h1>
         <div className={s.serviseItems}>
            {serviseItems}
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Services);
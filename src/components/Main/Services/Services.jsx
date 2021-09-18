import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   getCategoriesSelector,
   getProductsListSelector,
   getSelectedServicesSelector
} from '../../../redux/selectors/products-selector.js';
import {
   setProductsThunkCreater as setProducts
} from '../../../redux/reducers/products-reducer.js';
import s from './Services.module.css';

import ServiceItem from './ServiceItem/ServiceItem';

const Services = (props) => {
   const dispatch = useDispatch();
   const categories = useSelector(state => getCategoriesSelector(state));
   const services = useSelector(state => getProductsListSelector(state));
   const selectedServices = useSelector(state => getSelectedServicesSelector(state));

   const { categoryId } = useParams();
   const categoryName = categories.filter(category => category.uuid === categoryId)[0].name;

   const ServiceItems = services ? services.map(servise => {
      return <ServiceItem key={servise.uuid}
         id={servise.uuid}
         category={servise.category}
         name={servise.name}
         picture={servise.picture}
         price={servise.price}
         duration={servise.duration}
         hint={servise.hint} />
   }) : null;

   useEffect(() => {
      dispatch(setProducts(categoryId, ''));
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [categoryId]);

   return (
      <div className={s.block}>
         <h1>Главная/ <span>{categoryName}</span></h1>
         <div className={s.ServiceItems}>
            {ServiceItems}
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Services);
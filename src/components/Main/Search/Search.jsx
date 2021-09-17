import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   setProductsThunkCreater as setProducts
} from '../../../redux/reducers/products-reducer.js';
import s from './Search.module.css';

import ServiceItem from '../Services/ServiceItem/ServiceItem';

const Search = (props) => {
   const dispatch = useDispatch();
   const services = useSelector(state => state.products.productsList);
   const selectedServices = useSelector(state => state.products.selectedServices);

   const { serviceName } = useParams();

   const ServiceItems = services ? services.map(servise => {
      return <ServiceItem key={servise.uuid}
         id={servise.id}
         category={servise.category}
         name={servise.name}
         picture={servise.picture}
         price={servise.price}
         duration={servise.duration}
         hint={servise.hint} />
   }) : null;

   useEffect(() => {
      dispatch(setProducts('', serviceName));

      return () => {
         localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
      }
   }, [serviceName]);

   return (
      <div className={s.block}>
         <h1>Пойск/ <span>{serviceName}</span></h1>
         <div className={s.ServiceItems}>
            {ServiceItems}
         </div>
      </div>
   );
}


export default compose(
   withAuthRedirect
)(Search);
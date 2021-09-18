import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import withAuthRedirect from '../../../hoc/withAuthRedirect.js';
import {
   getBasketListSelector,
   getSelectedServicesSelector
} from '../../../redux/selectors/products-selector.js';
import {
   setBasketProductsThunkCreater as setBasketProducts,
   finishShoppingThunkCreater as finishShopping,
} from '../../../redux/reducers/products-reducer.js';
import s from './Basket.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow.jsx';
import Button from '../../common/Button/Button';
import { CloseButton } from '../../common/ControlPanel/ControlPanel';
import BasketItem from './BasketItem/BasketItem.jsx';

const Basket = (props) => {
   const dispatch = useDispatch();
   const basketList = useSelector(state => getBasketListSelector(state));
   const selectedServices = useSelector(state => getSelectedServicesSelector(state));
   
   const [shopPanelState, setShopPanelState] = useState(false);
   const itemsLength = basketList.length;
   let totalPrice = 0;
   Array.from(basketList).forEach(item => {
      totalPrice += item.price * selectedServices[item.uuid]
   });

   const basketItems = basketList ? basketList.map(servise => {
      return <BasketItem key={servise.uuid}
         id={servise.uuid}
         category={servise.category}
         name={servise.name}
         picture={servise.picture}
         price={servise.price}
         duration={servise.duration}
         hint={servise.hint} />
   }) : null;

   const handleFinishShopping = () => {
      setShopPanelState(true);
      dispatch(finishShopping());
   }

   useEffect(() => {
      dispatch(setBasketProducts());
      localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedServices]);

   return (
      <>
         <div className={s.block}>
            <h1>Корзина</h1>
            <div className={s.content}>
               <div className={s.basketItems}>
                  {basketItems}
               </div>
               <div className={s.shopPanel}>
                  <h3>ИТОГО</h3>
                  <b className={s.itemsCount}>{itemsLength} вещи</b>
                  <b className={s.totalPrice}>Общая сумма {totalPrice} тг</b>
                  <Button text='Оформить' onClick={handleFinishShopping} />
               </div>
            </div>
         </div>

         {shopPanelState &&
            <ModalWindow>
               <CloseButton onClick={() => setShopPanelState(false)} />
               <div className={s.shopModalWindow}>
                  <h2>Спасибо за заказ</h2>
                  <p>Отслеживайте статус вашего заказа в профиле</p>
                  <NavLink to='/'>
                     <Button text={'На главную'} />
                  </NavLink>
               </div>
            </ModalWindow>
         }
      </>
   );
}


export default compose(
   withAuthRedirect
)(Basket);
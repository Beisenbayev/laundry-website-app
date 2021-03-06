import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { secondToDay } from '../../../../utils/timeConverter.js';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import {
   getSelectedServicesSelector
} from '../../../../redux/selectors/products-selector.js';
import {
   updateSelectedServicesThunkCreater as updateSelectedServices
} from '../../../../redux/reducers/products-reducer.js';
import s from './BasketItem.module.css';

import ModalWindow from '../../../common/ModalWindow/ModalWindow';
import { CloseButton, DescriptionButton } from '../../../common/ControlPanel/ControlPanel';

const BasketItem = (props) => {
   const dispatch = useDispatch();
   const selectedServices = useSelector(state => getSelectedServicesSelector(state));

   let [quantity, setQuantity] = useState(selectedServices[props.id] || 0);
   const [hintState, sethintState] = useState(false);

   const handleIncrease = (serviceId) => {
      setQuantity(quantity += 1);
      dispatch(updateSelectedServices({ [serviceId]: quantity }));
   }

   const handleDecrease = (serviceId) => {
      setQuantity(quantity -= 1);
      dispatch(updateSelectedServices({ [serviceId]: quantity }));
   }

   const handleRemoveItem = (serviceId) => {
      setQuantity(0);
      dispatch(updateSelectedServices({ [serviceId]: 0 }));
   }

   const toggleHintState = () => {
      if (hintState) {
         document.body.style.overflow = 'auto';
         sethintState(false);
      } else {
         window.scrollTo(0, 0);
         document.body.style.overflow = 'hidden';
         sethintState(true);
      }
   }

   return (
      <>
         <div className={s.block}>
            <DescriptionButton className={s.hintButton} onClick={toggleHintState} />
            <CloseButton onClick={() => handleRemoveItem(props.id)} />
            <div className={s.picture}>
               <img src={`https://api.doover.tech${props.picture}`} alt="" />
            </div>
            <div className={s.info}>
               <h3>{props.name}</h3>

               <div className={s.about}>
                  <p className={s.duration}>???????? ???????????????? / <b>{secondToDay(props.duration)} ??????</b></p>
                  <div className={s.quantityPanel}>
                     <i onClick={() => handleIncrease(props.id)} ><AiOutlinePlusCircle /></i>
                     <b>{quantity}</b>
                     {quantity > 0 &&
                        <i onClick={() => handleDecrease(props.id)} > <AiOutlineMinusCircle /></i>
                     }
                  </div>
                  <b className={s.price}>{props.price} ????</b>
               </div>
               
            </div>
         </div>

         {hintState &&
            <ModalWindow>
               <CloseButton onClick={toggleHintState} />
               <div className={s.hintWindow}>
                  <h3>{props.hint.title}</h3>
                  <p>{props.hint.description}</p>
               </div>
            </ModalWindow>
         }
      </>
   );
}


export default BasketItem;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { secondToDay } from '../../../../utils/timeConverter.js';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import s from './ServiceItem.module.css';

import ModalWindow from '../../../common/ModalWindow/ModalWindow';
import { CloseButton, DescriptionButton } from '../../../common/ControlPanel/ControlPanel';

const ServiceItem = (props) => {
   const selectedServices = useSelector(state => state.products.selectedServices);

   let [quantity, setQuantity] = useState(selectedServices[props.id] || 0);
   const [hintState, sethintState] = useState(false);

   const handleIncrease = (serviceId) => {
      setQuantity(quantity += 1);
      selectedServices[serviceId] = quantity;
      console.log(selectedServices)
   }
   
   const handleDecrease = (serviceId) => {
      setQuantity(quantity -= 1);
      selectedServices[serviceId] = quantity;
      selectedServices[serviceId] === 0 && delete selectedServices[serviceId];
      console.log(selectedServices)
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
            <DescriptionButton onClick={toggleHintState} />
            <div className={s.picture}>
               <img src={`https://api.doover.tech${props.picture}`} alt="" />
            </div>
            <div className={s.info}>
               <h3>{props.name}</h3>
               <p className={s.duration}>Срок доставки / <b>{secondToDay(props.duration)} дня</b></p>
               <b className={s.price}>{props.price} тг</b>
               <div className={s.quantityPanel}>
                  <i onClick={() => handleIncrease(props.id)} ><AiOutlinePlusCircle /></i>
                  <b>{quantity}</b>
                  {quantity > 0 &&
                     <i onClick={() => handleDecrease(props.id)} > <AiOutlineMinusCircle /></i>
                  }
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


export default ServiceItem;
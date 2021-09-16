import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
   loginThunkCreater as login
} from '../../../redux/reducers/auth-reducer.js';
import s from './Login.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
   const dispatch = useDispatch();
   const isActive = useSelector(state => state.profile.isActive);
   const errorMessage = useSelector(state => state.auth.errorMessage);

   const handleSubmit = (data) => {
      dispatch(login(data));
   }

   if (isActive) return <Redirect to='/' />;

   return (
      <ModalWindow>
         <div className={s.block}>
            <h2>Войти</h2>
            <LoginForm submit={handleSubmit}
               errorMessage={errorMessage} />
         </div>
      </ModalWindow>
   );
}


export default Login;
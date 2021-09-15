import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   loginThunkCreater as login
} from '../../../redux/reducers/auth-reducer.js';
import s from './Login.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
   const dispatch = useDispatch();
   const errorMessage = useSelector(state => state.auth.errorMessage);

   const handleSubmit = (data) => {
      dispatch(login(data));
   }

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
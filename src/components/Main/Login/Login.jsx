import React from 'react';
import s from './Login.module.css';

import ModalWindow from '../../common/ModalWindow/ModalWindow';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
   return (
      <ModalWindow>
         <div className={s.block}>
            <h2>Войти</h2>
            <LoginForm />
         </div>
      </ModalWindow>
   );
}


export default Login;
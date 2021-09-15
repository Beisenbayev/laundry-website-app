import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.css';

import { MyInput } from '../../../common/FormElements/FormElements';
import Button from '../../../common/Button/Button';

const LoginForm = (props) => {
   return (
      <Formik initialValues={{
         email: '',
         password: '',
      }}
         validationSchema={Yup.object({
            email: Yup.string()
               .required('Обязательное поле')
               .min(1, 'Некорректный логин'),
            password: Yup.string()
               .required('Обязательное поле')
               .min(1, 'Некорректный логин'),
         })}
         onSubmit={(values) => {
            props.submit(values);
         }}>
         <Form className={s.form}>
            <MyInput name={'email'}
               type={'email'}
               placeholder={'Логин'} />
            <MyInput name={'password'}
               type={'password'}
               placeholder={'Пароль'} />
            <span className={s.errorText}>
               {props.errorMessage && props.errorMessage}
            </span>
            <Button type='submit'
               text={'Войти'} />
         </Form>
      </Formik>
   );
}


export default LoginForm;
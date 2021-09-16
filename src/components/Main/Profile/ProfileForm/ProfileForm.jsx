import React from 'react';
import { Formik, Form } from 'formik';
import s from './ProfileForm.module.css';

import { MyToggleSwitch } from '../../../common/FormElements/FormElements';

const ProfileForm = (props) => {
   return (
      <Formik initialValues={{
         notify: props.notify
      }}
         onSubmit={({ notify }) => {
            console.log(notify);
         }}>
         {formik =>
            <Form className={s.form}>
               <span>Уведомления</span>
               <MyToggleSwitch
                  name='notify'
                  checked={formik.values.notify}
                  type='submit' />
            </Form>
         }
      </Formik>
   );
}


export default ProfileForm;
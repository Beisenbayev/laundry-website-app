import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import s from './FormElements.module.css';

export const MyInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <label className={cn(s.label, { [s.hasError]: error })}
         htmlFor={props.name}>{error ? error : label}
         <input className={s.block} {...field} {...props} />
      </label>
   );
}
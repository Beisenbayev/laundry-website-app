import React, { useState } from 'react';
import { useField } from 'formik';
import cn from 'classnames';
import s from './FormElements.module.css';

export const MyInput = ({ placeholder, ...props }) => {
   const [field, meta] = useField(props);
   const error = meta.touched && meta.error;

   return (
      <input className={cn(s.textInput,
         { [s.hasError]: error })}
         placeholder={error ? meta.error : placeholder}
         {...field} {...props} />
   );
}
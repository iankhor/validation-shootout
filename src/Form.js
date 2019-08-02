import React from 'react';
import useForm, { FormContext } from 'react-hook-form';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import './Form.css';

const Form = () => {
  const form = useForm({ mode: 'onBlur' });

  return (
    <FormContext {...form}>
      <form className="form">
        <Username />

        <div className="cell" />

        <Password form={form} />

        <Country form={form} />
      </form>
    </FormContext>
  );
};

export default Form;

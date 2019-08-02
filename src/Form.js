import React from 'react';
import useForm from 'react-hook-form';
import './Form.css';
import Username from './Username';
import Password from './Password';
import Country from './Country';

const Form = () => {
  const form = useForm({ mode: 'onBlur' });

  return (
    <form className="form">
      <Username form={form} />

      <div className="cell" />

      <Password form={form} />

      <Country form={form} />
    </form>
  );
};

export default Form;

import React from 'react';
import useForm, { FormContext } from 'react-hook-form';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import './../Form.css';

const HookForm = () => {
  const form = useForm({ mode: 'onBlur' });

  const { handleSubmit } = form;

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <FormContext {...form}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Username />

        <div className="cell" />

        <Password form={form} />

        <Country form={form} />

        <button type="submit">Submit</button>
      </form>
    </FormContext>
  );
};

export default HookForm;

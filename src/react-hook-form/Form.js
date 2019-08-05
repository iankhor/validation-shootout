import React, { useState } from 'react';
import useForm, { FormContext } from 'react-hook-form';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import './../Form.css';

const HookForm = () => {
  const form = useForm({ mode: 'onBlur' });
  const { handleSubmit } = form;

  const [formValues, setFormValues] = useState({});
  const onSubmit = values => setFormValues(values);

  return (
    <FormContext {...form}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Username />

        <div className="cell" />

        <Password form={form} />

        <Country form={form} />

        <button type="submit">Submit</button>

        <div className="cell" />

        <h3>Submitted values</h3>
        <pre>{JSON.stringify(formValues, 0, 2)}</pre>
      </form>
    </FormContext>
  );
};

export default HookForm;

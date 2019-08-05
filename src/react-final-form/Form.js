import React from 'react';
import { Form } from 'react-final-form';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import './../Form.css';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
};

const FinalForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <Username />
          <div className="cell" />
          <Password />
          <Country />
        </form>
      )}
    />
  );
};

export default FinalForm;

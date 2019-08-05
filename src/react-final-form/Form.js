import React from 'react';
import { Form } from 'react-final-form';
import Username from './Username';
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
        </form>
      )}
    />
  );
};

export default FinalForm;

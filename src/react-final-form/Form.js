import React, { useState } from 'react';
import { Form } from 'react-final-form';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import './../Form.css';

const FinalForm = () => {
  const [formValues, setFormValues] = useState({});

  const onSubmit = values => setFormValues(values);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <Username />

          <div className="cell" />

          <Password />

          <Country />

          <button type="submit">Submit</button>

          <div className="cell" />

          <h3>Submitted values</h3>
          <pre>{JSON.stringify(formValues, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default FinalForm;

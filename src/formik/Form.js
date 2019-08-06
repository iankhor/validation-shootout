import React from 'react';
import Username from './Username';
import Country from './Country';
import { Formik, Form } from 'formik';

import './../Form.css';

const initialValues = {
  username: '',
  country: ''
};

const FormikForm = () => {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={initialValues}
      render={({ errors, touched }) => (
        <Form className="form">
          <Username errors={errors} touched={touched} />

          <div className="cell" />

          <Country errors={errors} touched={touched} />
        </Form>
      )}
    />
  );
};

export default FormikForm;

{
  /*
      <div className={'cell'}>
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" />
      </div>

      <div className="cell">
        <label>Country</label>
      </div>


      <button type="submit">Submit</button> */
}

import React from 'react';
import Username from './Username';
import { Formik, Form } from 'formik';

import './../Form.css';

const initialValues = {
  username: ''
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
        </Form>
      )}
    />
  );
};

export default FormikForm;

{
  /* <div className={'cell'}>
        <label>Password:</label>
        <input type="password" name="psw" />
      </div>

      <div className={'cell'}>
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" />
      </div>

      <div className="cell">
        <label>Country</label>
      </div>

      <div className="cell">
        <select id="country" name="country" defaultValue="">
          <option value="" />
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>

      <button type="submit">Submit</button> */
}

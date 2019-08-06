import React from 'react';
import Username from './Username';
import Password from './Password';
import Country from './Country';
import { Formik, Form } from 'formik';

import './../Form.css';

const initialValues = {
  username: '',
  country: '',
  pwd: '',
  confirmPwd: ''
};

const FormikForm = () => {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={initialValues}
      render={({ errors, touched, values }) => (
        <Form className="form">
          <Username errors={errors} touched={touched} />

          <div className="cell" />
          <Password errors={errors} touched={touched} values={values} />

          <Country errors={errors} touched={touched} />

          <button type="submit">Submit</button>

          <div className="cell" />

          <h3>Submitted values</h3>
          {/* <pre></pre> */}
        </Form>
      )}
    />
  );
};

export default FormikForm;

{
  /*



      <button type="submit">Submit</button> */
}

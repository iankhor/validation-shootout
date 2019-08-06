import React from 'react';
import Username from './Username';
import Password from './Password';
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
          <Password errors={errors} touched={touched} />

          <Country errors={errors} touched={touched} />
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

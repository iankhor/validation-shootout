import React, { Fragment } from 'react';
import ReactHookForm from './react-hook-form/Form';
import ReactFinalForm from './react-final-form/Form';
import FormikForm from './formik/Form';
import './Container.css';

const Container = () => {
  return (
    <Fragment>
      <h1>react-hook-form</h1>
      <ReactHookForm />

      <div className="h-divider" />

      <h1>React Final Form</h1>
      <ReactFinalForm />

      <div className="h-divider" />

      <h1>Formik</h1>
      <FormikForm />
    </Fragment>
  );
};

export default Container;

import React, { Fragment } from 'react';
import ReactHookForm from './react-hook-form/Form';
import './Container.css';

const Container = () => {
  return (
    <Fragment>
      <h1>react-hook-form</h1>
      <ReactHookForm />
      <div className="h-divider" />
    </Fragment>
  );
};

export default Container;

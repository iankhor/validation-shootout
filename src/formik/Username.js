import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Username = ({ errors, touched }) => {
  const usernameValidator = value => {
    if (!value) return 'Required';
  };

  return (
    <div className={'cell'}>
      <label>User name:</label>
      <Field type="text" name="username" validate={usernameValidator} />
      {errors.username && touched.username && <div>{errors.username}</div>}

      {/* This line is not testable in Jest due to magic */}
      {/* <ErrorMessage name="username">{errorMessage => <div>{errorMessage}</div>}</ErrorMessage> */}
    </div>
  );
};

export default Username;

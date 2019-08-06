import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Username = ({ errors, touched }) => {
  const usernameValidator = value => {
    if (!value) return 'Required';
    if (value.length > 5) return 'Username too long';
  };

  return (
    <div className={'cell ' + (errors.username && touched.username ? 'error' : '')}>
      <label>User name:</label>
      <Field type="text" id="username" name="username" validate={usernameValidator} />
      {errors.username && touched.username && <div>{errors.username}</div>}

      {/* This line is not testable in Jest due to magic */}
      {/* <ErrorMessage name="username">{errorMessage => <div>{errorMessage}</div>}</ErrorMessage> */}
    </div>
  );
};

export default Username;

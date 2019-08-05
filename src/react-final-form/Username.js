import React from 'react';
import { Field } from 'react-final-form';

const Username = () => {
  const userNameValidator = value => {
    if (!value) return 'Required';
    if (value.length > 5) return 'Username too long';
  };

  return (
    <Field name="username" type="text" validate={userNameValidator}>
      {({ input, meta: { error, touched } }) => (
        <div className={'cell ' + (error && touched ? 'error' : '')}>
          <label>User name:</label>
          <input {...input} />
          {error && touched && <div>{error}</div>}
        </div>
      )}
    </Field>
  );
};

export default Username;

import React, { Fragment } from 'react';
import { Field } from 'react-final-form';

const Password = () => {
  const passwordValidator = value => {
    if (!value) return 'Password required';
  };

  return (
    <Fragment>
      <Field name="password" type="password" name="pwd" validate={passwordValidator}>
        {({ input, meta: { error, touched } }) => (
          <div className={'cell ' + (error && touched ? 'error' : '')}>
            <label>Password:</label>
            <input {...input} />
            {error && touched && <div>{error}</div>}
          </div>
        )}
      </Field>

      <Field name="password" type="password" name="confirm-pwd" validate={passwordValidator}>
        {({ input, meta: { error, touched } }) => (
          <div className={'cell ' + (error && touched ? 'error' : '')}>
            <label>Confirm password:</label>
            <input {...input} />
            {error && touched && <div>{error}</div>}
          </div>
        )}
      </Field>
    </Fragment>
  );
};

export default Password;

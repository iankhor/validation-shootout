import React, { Fragment } from 'react';
import { Field, useField } from 'react-final-form';

const Password = () => {
  const passwordValidator = value => {
    if (!value) return 'Password required';
  };

  const {
    input: { value: passwordValue }
  } = useField('pwd');

  const confirmPasswordValidator = confirmPasswordValue => {
    if (!confirmPasswordValue) return 'Password required';

    if (passwordValue !== confirmPasswordValue) return 'Password does not match';
  };

  return (
    <Fragment>
      <Field type="password" name="pwd" validate={passwordValidator}>
        {({ input, meta: { error, touched } }) => (
          <div className={'cell ' + (error && touched ? 'error' : '')}>
            <label>Password:</label>
            <input {...input} />
            {error && touched && <div>{error}</div>}
          </div>
        )}
      </Field>

      <Field type="password" name="confirm-pwd" validate={confirmPasswordValidator}>
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

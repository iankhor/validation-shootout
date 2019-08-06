import React, { Fragment } from 'react';
import { Field } from 'formik';

const Password = () => {
  const pwdValidator = value => {
    // if (!value) return 'Required';
    // if (value.length > 5) return 'Username too long';
  };

  const confirmPwdValidator = value => {
    // if (!value) return 'Required';
    // if (value.length > 5) return 'Username too long';
  };

  return (
    <Fragment>
      <div className={'cell'}>
        <label>Password:</label>
        <Field type="password" id="pwd" name="pwd" validate={pwdValidator} />
      </div>

      <div className={'cell'}>
        <label>Confirm password:</label>
        <Field type="password" id="confirmPwd" name="confirmPwd" validate={confirmPwdValidator} />
      </div>
    </Fragment>
  );
};

export default Password;

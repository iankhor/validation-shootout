import React, { Fragment } from 'react';
import { Field } from 'formik';

const Password = ({ errors, touched, values }) => {
  const pwdValidator = value => {
    if (!value) return 'Password required';
  };

  const confirmPwdValidator = (confirmPwd, pwd) => {
    if (!confirmPwd) return 'Password required';

    if (pwd !== confirmPwd) return 'Password does not match';
  };

  return (
    <Fragment>
      <div className={'cell ' + (errors.pwd && touched.pwd ? 'error' : '')}>
        <label>Password:</label>
        <Field type="password" id="pwd" name="pwd" validate={pwdValidator} />
        {errors.pwd && touched.pwd && <div>{errors.pwd}</div>}
      </div>

      <div className={'cell ' + (errors.confirmPwd && touched.confirmPwd ? 'error' : '')}>
        <label>Confirm password:</label>
        <Field type="password" id="confirmPwd" name="confirmPwd" validate={confirmPwd => confirmPwdValidator(confirmPwd, values.pwd)} />
        {errors.confirmPwd && touched.confirmPwd && <div>{errors.confirmPwd}</div>}
      </div>
    </Fragment>
  );
};

export default Password;

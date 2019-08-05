import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import './Form.css';

const Password = () => {
  const { register, errors, getValues } = useFormContext();

  const passwordRegister = register({ required: 'Please enter a password' });

  const passwordValidator = ({ psw, confirmPsw }) => psw === confirmPsw || 'Passwords do not match';
  const confirmPasswordRegister = register({ required: true, validate: () => passwordValidator(getValues()) });

  return (
    <Fragment>
      <div className={'cell ' + (errors.psw ? 'error' : '')}>
        <label>Password:</label>
        <input type="password" name="psw" ref={passwordRegister} />
        {errors.psw && <div>{errors.psw.message}</div>}
      </div>

      <div className={'cell ' + (errors.confirmPsw ? 'error' : '')}>
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" ref={confirmPasswordRegister} />
        {errors.confirmPsw && <div>{errors.confirmPsw.message}</div>}
      </div>
    </Fragment>
  );
};

export default Password;

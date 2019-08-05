import React from 'react';
import { useFormContext } from 'react-hook-form';
import './../Form.css';

const Username = () => {
  const { register, errors } = useFormContext();

  const usernameRegister = register({ maxLength: { value: 5, message: 'Username too long' } });

  return (
    <div className={'cell ' + (errors.username ? 'error' : '')}>
      <label>User name:</label>
      <input type="text" name="username" ref={usernameRegister} />
      {errors.username && <div>{errors.username.message}</div>}
    </div>
  );
};

export default Username;

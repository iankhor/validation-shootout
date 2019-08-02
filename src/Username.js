import React from 'react';
import './Form.css';

const Username = ({ form }) => {
  const { register, errors } = form;

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

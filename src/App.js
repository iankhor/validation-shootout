import React from 'react';
import useForm from 'react-hook-form';
import './App.css';

const App = () => {
  const { register, errors, getValues } = useForm({ mode: 'onBlur' });

  const usernameRegister = register({ maxLength: { value: 5, message: 'Username too long' } });

  const passwordRegister = register({ required: 'Please enter a password' });

  const passwordValidator = ({ psw, confirmPsw }) => psw === confirmPsw || 'Passwords do not match';
  const confirmPasswordRegister = register({ required: true, validate: () => passwordValidator(getValues()) });

  const countrySelectRegister = register({ required: 'Please select a country' });

  const errorClassName = errorKey => (errors[errorKey] ? 'error' : '');

  return (
    <form className="form">
      <div className={'cell ' + errorClassName('username')}>
        <label>User name:</label>
        <input type="text" name="username" ref={usernameRegister} />
        {errors.username && <div>{errors.username.message}</div>}
      </div>

      <div className="cell" />

      <div className={'cell ' + errorClassName('confirmPsw')}>
        <label>Password:</label>
        <input type="password" name="psw" ref={passwordRegister} />
        {errors.psw && <div>{errors.psw.message}</div>}
      </div>

      <div className={'cell ' + errorClassName('confirmPsw')}>
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" ref={confirmPasswordRegister} />
        {errors.confirmPsw && <div>{errors.confirmPsw.message}</div>}
      </div>

      <div className="cell">
        <label>Country</label>
      </div>

      <div className={'cell ' + errorClassName('country')}>
        <select id="country" name="country" defaultValue="" ref={countrySelectRegister}>
          <option value="" />
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        {errors.country && <div>{errors.country.message}</div>}
      </div>
    </form>
  );
};

export default App;

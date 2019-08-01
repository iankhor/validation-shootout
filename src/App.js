import React from 'react';
import useForm from 'react-hook-form';
import './App.css';

const App = () => {
  const { register, errors, watch, setValue } = useForm({ mode: 'onBlur' });

  const username = watch('username', '');
  const usernameRegister = register({ maxLength: { value: 5, message: 'Username too long' } });
  const usernameOnChange = ({ target: { value } }) => setValue(value);

  const passwordRegister = register({ required: true });
  const confirmPasswordRegister = register({ required: true });

  return (
    <form className="form">
      <div className={'cell ' + (errors.username ? 'error' : '')}>
        <label>User name:</label>
        <input type="text" name="username" value={username} onChange={usernameOnChange} ref={usernameRegister} />
        {errors.username && <div>{errors.username.message}</div>}
      </div>

      <div className="cell" />

      <div className="cell">
        <label>Password:</label>
        <input type="password" name="psw" ref={passwordRegister} />
      </div>

      <div className="cell">
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" ref={confirmPasswordRegister} />
      </div>

      <div className="cell">
        <label>Country</label>
      </div>

      <div className="cell">
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </form>
  );
};

export default App;

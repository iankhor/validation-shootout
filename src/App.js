import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  return (
    <form className="form">
      <div className="cell">
        <label>User name:</label>
        <input type="text" name="username" value={username} onChange={({ target: { value } }) => setUsername(value)} />
      </div>

      <div className="cell" />

      <div className="cell">
        <label>Password:</label>
        <input type="password" name="psw" />
      </div>

      <div className="cell">
        <label>Confirm password:</label>
        <input type="password" name="psw" />
      </div>

      <div className="cell">
        <label for="country">Country</label>
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
}

export default App;

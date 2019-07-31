import React from 'react';
import './App.css';

function App() {
  return (
    <form className="form">
      <div className="row">
        <label>User name:</label>
        <input type="text" name="username" />
      </div>

      <div className="row">
        <label>User password:</label>
        <input type="password" name="psw" />
      </div>

      <div className="row">
        <label for="country">Country</label>
      </div>
      <div className="row">
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

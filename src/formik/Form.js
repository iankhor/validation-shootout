import React from 'react';

const FormikForm = () => {
  return (
    <form className="form" onSubmit={() => {}}>
      <div className={'cell'}>
        <label>User name:</label>
        <input type="text" name="username" />
      </div>

      <div className="cell" />

      <div className={'cell'}>
        <label>Password:</label>
        <input type="password" name="psw" />
      </div>

      <div className={'cell'}>
        <label>Confirm password:</label>
        <input type="password" name="confirmPsw" />
      </div>

      <div className="cell">
        <label>Country</label>
      </div>

      <div className="cell">
        <select id="country" name="country" defaultValue="">
          <option value="" />
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikForm;

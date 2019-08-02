import React from 'react';
import useForm from 'react-hook-form';
import './Form.css';
import Username from './Username';
import Password from './Password';

const Form = () => {
  const form = useForm({ mode: 'onBlur' });
  const { register, errors } = form;

  const countrySelectRegister = register({ required: 'Please select a country' });

  const errorClassName = errorKey => (errors[errorKey] ? 'error' : '');

  return (
    <form className="form">
      <Username form={form} />
      <div className="cell" />
      <Password form={form} />

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

export default Form;

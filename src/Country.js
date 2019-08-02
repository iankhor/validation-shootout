import React, { Fragment } from 'react';

const Country = ({ form }) => {
  const { register, errors } = form;

  const countrySelectRegister = register({ required: 'Please select a country' });
  const errorClassName = errorKey => (errors[errorKey] ? 'error' : '');

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Country;

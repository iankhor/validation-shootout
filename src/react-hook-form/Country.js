import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

const Country = () => {
  const { register, errors } = useFormContext();

  const countrySelectRegister = register({ required: 'Please select a country' });

  return (
    <Fragment>
      <div className="cell">
        <label>Country</label>
      </div>

      <div className={'cell ' + (errors.country ? 'error' : '')}>
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

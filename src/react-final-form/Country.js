import React from 'react';
import { Field } from 'react-final-form';

const Country = () => {
  const CountryValidator = value => {
    if (!value) return 'Country is required';
  };

  return (
    <Field name="country" id="country" defaultValue="" validate={CountryValidator}>
      {({ input, meta: { error, touched } }) => (
        <div className={'cell ' + (error && touched ? 'error' : '')}>
          <label>Country</label>
          <select {...input}>
            <option value="" />
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          {error && touched && <div>{error}</div>}
        </div>
      )}
    </Field>
  );
};

export default Country;

import React, { Fragment } from 'react';
import { Field } from 'react-final-form';

const Country = () => {
  const CountryValidator = value => {
    if (!value) return 'Country is required';
  };

  return (
    <Field name="country" id="country" defaultValue="" validate={CountryValidator}>
      {({ input, meta: { error, touched } }) => (
        <Fragment>
          <div className="cell">
            <label>Country</label>
          </div>

          <div className={'cell ' + (error && touched ? 'error' : '')}>
            <select {...input}>
              <option value="" />
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            {error && touched && <div>{error}</div>}
          </div>
        </Fragment>
      )}
    </Field>
  );
};

export default Country;

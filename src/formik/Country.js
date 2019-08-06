import React, { Fragment } from 'react';
import { Field } from 'formik';

const Country = ({ errors, touched }) => {
  const countryValidator = value => {
    if (!value) return 'Country is required';
  };

  return (
    <Fragment>
      <div className="cell">
        <label>Country</label>
      </div>

      <div className={'cell ' + (errors.country && touched.country ? 'error' : '')}>
        <Field component="select" name="country" validate={countryValidator}>
          <option value="" />
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </Field>
        {errors.country && touched.country && <div>{errors.country}</div>}
      </div>
    </Fragment>
  );
};

export default Country;

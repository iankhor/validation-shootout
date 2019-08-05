import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';

const shallowComponent = (props = {}) => mount(<Form {...props} />);

it('renders without crashing', () => {
  shallowComponent();
});

it('has a form element', () => {
  expect(
    shallowComponent()
      .find('form')
      .exists()
  ).toEqual(true);
});

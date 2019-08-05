import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';

const mountComponent = (props = {}) => mount(<Form {...props} />);

it('renders without crashing', () => {
  mountComponent();
});

it('has a form element', () => {
  expect(
    mountComponent()
      .find('form')
      .exists()
  ).toEqual(true);
});

it('has Username field', () => {
  expect(
    mountComponent()
      .find('Username')
      .exists()
  ).toEqual(true);
});

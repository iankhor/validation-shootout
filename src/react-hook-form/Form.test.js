import React from 'react';
import { mount } from 'enzyme';
import { type } from '../test-utils';
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

describe('username', () => {
  describe('validation', () => {
    const errorElement = <div>Username too long</div>;

    describe('less than 5 inclusive', () => {
      it('does not display error message', () => {
        const component = shallowComponent();
        type(component, "input[name='username']", '12345');

        expect(component.contains(errorElement)).toEqual(false);
      });
    });

    describe('more than 5', () => {
      it('displays error message', done => {
        const component = shallowComponent();
        type(component, "input[name='username']", '');

        expect(component.contains(errorElement)).toEqual(true);
      });
    });
  });
});

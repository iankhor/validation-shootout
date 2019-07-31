import React from 'react';
import { shallow } from 'enzyme';
import { type } from './test-utils';
import App from './App';

const shallowComponent = (props = {}) => shallow(<App {...props} />);

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

fdescribe('username', () => {
  it('shows displayed value', () => {
    const component = shallowComponent();
    type(component, "input[name='username']", 'foobar');

    expect(component.find("input[name='username']").props().value).toEqual('foobar');
  });

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
      it('displays error message', () => {
        const component = shallowComponent();
        type(component, "input[name='username']", '123456');

        expect(component.contains(errorElement)).toEqual(true);
      });
    });
  });
});

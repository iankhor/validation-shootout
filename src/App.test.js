import React from 'react';
import { mount } from 'enzyme';
import { type } from './test-utils';
import App from './App';

const shallowComponent = (props = {}) => mount(<App {...props} />);

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
      it('displays error message', done => {
        const component = shallowComponent();
        type(component, "input[name='username']", '');

        process.nextTick(() => {
          // expect(component.find('#dob_form_group').text()).toContain('enter a valid date')
          console.log(component.debug());
          expect(component.contains(errorElement)).toEqual(true);
          done();
        });
      });
    });
  });
});

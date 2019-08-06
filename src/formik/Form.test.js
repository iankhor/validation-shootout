import React from 'react';
import { type } from '../test-utils';
import { mount, shallow } from 'enzyme';
import { ErrorMessage } from 'formik';

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

fdescribe('Username field', () => {
  it('renders', () => {
    expect(
      mountComponent()
        .find('Username')
        .exists()
    ).toEqual(true);
  });

  describe('validation', () => {
    describe('input', () => {
      fdescribe('not present', () => {
        it('when touched, shows required error ', done => {
          const component = mountComponent();
          const usernameInput = component.find("input[name='username']");

          usernameInput.simulate('blur');

          process.nextTick(() => {
            component.update();
            expect(component.find('Username').contains(<div>Required</div>)).toEqual(true);
            done();
          });
        });

        it(' when not touched, does not show required error', done => {
          const component = mountComponent();

          process.nextTick(() => {
            component.update();
            expect(component.find('Username').contains(<div>Required</div>)).toEqual(false);
            done();
          });
        });
      });

      describe('present', () => {
        it('when more than 5, displays error', () => {
          const component = mountComponent();

          type(component, "input[name='username']", '123456');
          component.update();

          expect(component.contains(<div>Username too long</div>)).toEqual(true);
        });

        it('when less than 5 inclusive, does not display error', () => {
          const component = mountComponent();

          type(component, "input[name='username']", '12345');
          component.update();

          expect(component.contains(<div>Username too long</div>)).toEqual(false);
        });
      });
    });
  });
});

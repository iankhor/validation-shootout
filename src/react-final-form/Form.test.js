import React from 'react';
import { type } from '../test-utils';
import { mount, shallow } from 'enzyme';

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

describe('Username field', () => {
  it('renders', () => {
    expect(
      mountComponent()
        .find('Username')
        .exists()
    ).toEqual(true);
  });

  describe('validation', () => {
    describe('input', () => {
      describe('not present', () => {
        it('when touched, shows required error ', () => {
          const component = mountComponent();
          const usernameInput = component.find("input[name='username']");

          usernameInput.simulate('blur');
          expect(component.contains(<div>Required</div>)).toEqual(true);
        });

        it(' when not touched, does not show required error', () => {
          const component = mountComponent();

          expect(component.contains(<div>Required</div>)).toEqual(false);
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

describe('Password field', () => {
  it('renders', () => {
    expect(
      mountComponent()
        .find('Password')
        .exists()
    ).toEqual(true);
  });

  it('has password field', () => {
    expect(
      mountComponent()
        .find("input[type='password'][name='pwd']")
        .exists()
    ).toEqual(true);
  });

  it('has confirm password field', () => {
    expect(
      mountComponent()
        .find("input[type='password'][name='confirm-pwd']")
        .exists()
    ).toEqual(true);
  });

  describe('password validation', () => {
    describe('input not present', () => {
      it('when touched, shows required error ', () => {
        const component = mountComponent();
        const passwordInput = component.find("input[type='password'][name='pwd']");

        passwordInput.simulate('blur');
        expect(component.contains(<div>Password required</div>)).toEqual(true);
      });

      it(' when not touched, does not show required error', () => {
        const component = mountComponent();

        expect(component.contains(<div>Password required</div>)).toEqual(false);
      });

      describe('input present', () => {
        it('displays what was entered', () => {
          const component = mountComponent();

          type(component, "input[name='pwd']", 'password123');
          component.update();

          expect(component.find("input[name='pwd']").props().value).toEqual('password123');
        });
      });
    });
  });

  describe('confirm password validation', () => {
    describe('input not present', () => {
      it('when touched, shows required error ', () => {
        const component = mountComponent();
        const confirmPasswordInput = component.find("input[type='password'][name='confirm-pwd']");

        confirmPasswordInput.simulate('blur');
        expect(component.contains(<div>Password required</div>)).toEqual(true);
      });

      it(' when not touched, does not show required error', () => {
        const component = mountComponent();

        expect(component.contains(<div>Password required</div>)).toEqual(false);
      });

      describe('input present', () => {
        it('displays what was entered', () => {
          const component = mountComponent();

          type(component, "input[name='confirm-pwd']", 'password123');
          component.update();

          expect(component.find("input[name='confirm-pwd']").props().value).toEqual('password123');
        });

        describe('confirm password input does not match password input field', () => {
          it('displays password does not match error', () => {
            const component = mountComponent();

            type(component, "input[name='pwd']", 'password123');
            type(component, "input[name='confirm-pwd']", 'notMatchPassword123');

            component.update();

            expect(component.contains(<div>Password does not match</div>)).toEqual(true);
          });
        });
      });
    });
  });
});

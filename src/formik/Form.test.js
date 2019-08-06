import React from 'react';
import { type } from '../test-utils';
import { mount, shallow } from 'enzyme';
import wait from 'waait';

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
        it('when touched, shows required error ', async () => {
          const component = mountComponent();
          const usernameInput = component.find("input[name='username']");

          usernameInput.simulate('blur');
          await wait();
          component.update();

          expect(component.find('Username').contains(<div>Required</div>)).toEqual(true);
        });

        it(' when not touched, does not show required error', async () => {
          const component = mountComponent();

          await wait();
          component.update();

          expect(component.find('Username').contains(<div>Required</div>)).toEqual(false);
        });
      });

      describe('present', () => {
        it('when more than 5, displays error', async () => {
          const component = mountComponent();

          type(component, "input[name='username']", '123456', 'username');
          await wait();
          component.update();

          expect(component.contains(<div>Username too long</div>)).toEqual(true);
        });

        it('when less than 5 inclusive, does not display error', async () => {
          const component = mountComponent();

          type(component, "input[name='username']", '12345', 'username');
          await wait();
          component.update();

          expect(component.contains(<div>Username too long</div>)).toEqual(false);
        });
      });
    });
  });
});

import React from 'react';
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
    });
  });
});

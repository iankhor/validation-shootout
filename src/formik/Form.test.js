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

fdescribe('Password field', () => {
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
        .find("input[type='password'][name='confirmPwd']")
        .exists()
    ).toEqual(true);
  });

  xdescribe('password validation', () => {
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
});

describe('Country field', () => {
  it('renders', () => {
    expect(
      mountComponent()
        .find('Country')
        .exists()
    ).toEqual(true);
  });

  it('has select field', () => {
    expect(
      mountComponent()
        .find("select[name='country']")
        .exists()
    ).toEqual(true);
  });

  it('nothing is selected by default', () => {
    expect(
      mountComponent()
        .find("select[name='country']")
        .props().value
    ).toEqual('');
  });

  describe('select validation', () => {
    describe('not selected', () => {
      it('when touched, shows required error ', async () => {
        const component = mountComponent();
        const countrySelect = component.find("select[name='country']");

        countrySelect.simulate('blur');
        await wait();
        component.update();

        expect(component.contains(<div>Country is required</div>)).toEqual(true);
      });

      it(' when not touched, does not show required error', async () => {
        const component = mountComponent();

        await wait();
        component.update();

        expect(component.contains(<div>Country is required</div>)).toEqual(false);
      });
    });

    describe('selected', () => {
      it('shows the selected value', async () => {
        const component = mountComponent();
        const countrySelect = component.find("select[name='country']");

        countrySelect.simulate('change', { target: { name: 'country', value: 'australia' } });
        await wait();
        component.update();

        expect(component.find("select[name='country']").props().value).toEqual('australia');
      });
    });
  });
});

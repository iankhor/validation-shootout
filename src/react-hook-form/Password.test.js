import React from 'react';
import { mount } from 'enzyme';
import useForm, { FormContext } from 'react-hook-form';
import Password from './Password';

const DummyForm = () => {
  const form = useForm({ mode: 'onBlur' });

  return (
    <FormContext {...form}>
      <form className="form">
        <Password form={form} />
      </form>
    </FormContext>
  );
};

it('shows errors when touched', () => {
  const component = mount(<DummyForm />);

  component.find("input[name='psw']").simulate('blur');
  component.update();

  expect(component.contains(<div>Please enter a password</div>)).toEqual(true);
});

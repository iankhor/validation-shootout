import React from 'react';

export function pressKey(wrapper, selector, key) {
  wrapper.find(selector).simulate('keydown', { key });
}

export function type(wrapper, selector, string, fieldName = '') {
  [...string].forEach(letter => pressKey(wrapper, selector, letter));

  const event = !!fieldName ? { target: { name: fieldName, value: string } } : { target: { value: string } };

  wrapper.find(selector).simulate('change', event);
  wrapper.find(selector).simulate('blur');
}

export function click(wrapper, selector) {
  wrapper.find(selector).simulate('click');
  wrapper.update();
}

export function close(wrapper, selector) {
  wrapper.find(selector).simulate('close');
  wrapper.update();
}

export function clickCheckbox(wrapper, selector, checkedValue = false) {
  wrapper.find(selector).simulate('change', { target: { checked: checkedValue } });
  wrapper.update();
}

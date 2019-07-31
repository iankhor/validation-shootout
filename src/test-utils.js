import React from 'react';

export function pressKey(wrapper, inputIdTag, key) {
  wrapper.find(`input[id='${inputIdTag}']`).simulate('keydown', { key });
}

export function type(wrapper, inputIdTag, string) {
  [...string].forEach(letter => pressKey(wrapper, inputIdTag, letter));

  wrapper.find(`input[id='${inputIdTag}']`).simulate('change', { target: { value: string } });
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

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {

});
test('renders coutner display', () => {

});
test('counter starts at 0', () => {

});
test('Clicking button increments counter display', () => {

}) 
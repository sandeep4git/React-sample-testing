import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';
const mockGetSecretWord = jest.fn();

/**
 * Set up function for app component 
 * @param {string} secretWord - desired secretWord state value for test
 * @returns {ReactWrapper}  
 */
const setUp = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord },
      jest.fn()
    ]);

  React.useReducer = mockUseReducer;

  // use mount because useEffect is not called on 'shallow'
  // https://github.com/airbnb/enzyme/issues/2086

  return mount(<App />);
}

test('App renders without error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
  test('getSecretWord gets called on App mount', () => {
    setUp();
    //check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});

describe('secretWord is not null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp('party');
  })
  it('Does not render spinner when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(true);
  });
  it('renders spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false);
  })
});

describe('secretWord is null', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp(null);
  })
  it('Does not render app when secretWord is  null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  });
  it('renders spinner when secretWord is null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(true);
  })
});


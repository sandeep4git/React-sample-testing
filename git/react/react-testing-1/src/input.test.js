import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

import checkProps from 'check-prop-types';

const setUp = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
}

it('App renders without error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

it('Doesnt throw warning with expected props', () => {
    checkProps(Input, { secretWord: [] })
});
describe('state contorlled input field', () => {
    let mockSetCurrentGuess = jest.fn();;
    let wrapper;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
        wrapper = setUp();
    })
    it('state updates with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1);
        const mockEvent = {
            target: { value: 'the-value' }
        };
        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toBeCalledWith('the-value');
    })
    it('field is cleared upon submit is clidked', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
})
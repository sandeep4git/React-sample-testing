import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';
import { findByTestAtrr, testStore } from './../Utils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            }, {
                title: 'Example title 2',
                body: 'Some text'
            }, {
                title: 'Example title 3',
                body: 'Some text'
            }]
        }
        wrapper = setUp(initialState);
    });
    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'component-app');
        expect(component.length).toBe(1);
    });
})
// it('renders learn react link', () => {
//     const wrapper = shallow(<App />)
//     const appComponent = wrapper.find("[data-test='component-app']");
//     expect(appComponent.length).toBe(1);
// });
// test('renders increment button', () => {

// });
// test('renders coutner display', () => {

// });
// test('counter starts at 0', () => {

// });
// test('Clicking button increments counter display', () => {
// }) 
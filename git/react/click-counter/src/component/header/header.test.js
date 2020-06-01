import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Header from './header';
import { findByTestAtrr } from '../../../utils'

const setUp = () => {
    const component = shallow(<Header />);
    return component;
}

// const findByTestAtrr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`)
//     return wrapper;
// }

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('renders learn react link', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    });
    it('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'logoIMG')
        expect(logo.length).toBe(1);
    });
})



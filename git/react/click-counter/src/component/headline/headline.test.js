import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headline';

import { findByTestAtrr } from '../../../utils';

const setUp = (props) => {
    const component = shallow(< Headline {...props} />);
    return component;
};

describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });
        it('Should render without erors', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });
        it('Should render h1 tag', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });
        it('Should render description', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })

    });
    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp();
        });
        it('Shouldnt render', () => {
            const component = findByTestAtrr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })

    });
});
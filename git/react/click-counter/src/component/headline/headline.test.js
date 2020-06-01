import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headline';
import checkPropTypes from 'check-prop-types';

import { findByTestAtrr, checkProps } from '../../../utils';

const setUp = (props) => {
    const component = shallow(< Headline {...props} />);
    return component;
};


describe('Headline Component', () => {
    describe('Checking Prop Types', () => {
        it('It should not throw a warning', () => {
            const expectedProps = {
                header: 'TestHeader',
                desc: 'Test Desc',
                tempArr: [{
                    firstName: 'Test fistName',
                    lastName: 'Test last Name',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    })
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
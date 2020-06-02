import React, { Component } from 'react';
import { shallow } from 'enzyme';

import { findByTestAtrr, checkProps } from '../../../utils';
import ListItem from './listItem';

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        it('shouldnot throw an warning', () => {
            const expectedProps = {
                title: 'Title',
                desc: 'Description'
            };
            const propsErr = checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Title',
                desc: 'Description'
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Should renders without errors', () => {
            const component = findByTestAtrr(wrapper, 'ListItemComponent')
            expect(component.length).toBe(1);
        });
        it('Should render Title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle')
            expect(title.length).toBe(1);
        });
        it('Should render Description', () => {
            const description = findByTestAtrr(wrapper, 'componentDescription')
            expect(description.length).toBe(1);
        });
    })

    describe('Should not Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Description'
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Should not renders', () => {
            const component = findByTestAtrr(wrapper, 'ListItemComponent')
            expect(component.length).toBe(0);
        });
    })
})

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        const { title, desc } = this.props;
        if (!title) {
            return null;
        }
        return (
            <div data-test='ListItemComponent'>
                <h1 data-test='componentTitle'>{title}</h1>
                <p data-test='componentDescription'>{desc}</p>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;
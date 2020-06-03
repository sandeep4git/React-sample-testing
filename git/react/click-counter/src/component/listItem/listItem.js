import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listItem.css'
class ListItem extends Component {
    render() {
        const { title, desc } = this.props;
        if (!title) {
            return null;
        }
        return (
            <div data-test='ListItemComponent' className='card'>
                <h4 data-test='componentTitle' className="card-title card-item">{title}</h4>
                <p data-test='componentDescription' className="card-text card-item">{desc}</p>
            </div>
        );
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;
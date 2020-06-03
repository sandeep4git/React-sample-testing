import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class SharedButton extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }
    render() {
        const { buttonText } = this.props;

        return (
            <button className='btn btn-primary' onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}
SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func

};


export default SharedButton;
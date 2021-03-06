import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({ secretWord }) => {

    const [currentGuess, setCurrentGuess] = React.useState('');
    return (
        <div data-test='component-input'>
            <form className='form-inline'>
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder='Guess Word'
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test='submit-button'
                    className='btn btn-primary mb-2'
                    onClick={(event) => {
                        event.preventDefault();
                        setCurrentGuess('')
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}
export default Input;


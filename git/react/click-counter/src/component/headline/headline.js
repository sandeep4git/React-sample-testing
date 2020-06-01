import React, { Component } from 'react';


// const Headline = (props) => {
//     return (
//         <div>
//             Test!
//         </div>
//     );
// }

class Headline extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { header, desc } = this.props;
        if (!header) {
            return null;
        }
        return (
            <div data-test='headlineComponent'>
                <h1 data-test='header'>{header}</h1>
                <p data-test='desc'>
                    {desc}
                </p>
            </div>
        );
    }
}

export default Headline;

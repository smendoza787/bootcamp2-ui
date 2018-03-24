import React from 'react';
import PropTypes from 'prop-types';

const style = {
    textAlign: 'center',
    backgroundColor: '#428cf4',
    padding: '10px',
    width: '600px',
    borderRadius: '5px',
    color: 'white',
    margin: '25px auto'
}

const Bootcamp2 = props => (
    <div style={style}>
        <h1>Bootcamp 2: {props.value}</h1>
    </div>
)

Bootcamp2.propTypes = {
    value: PropTypes.any.isRequired
}

export default Bootcamp2
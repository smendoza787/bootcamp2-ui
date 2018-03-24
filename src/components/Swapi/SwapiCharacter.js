import React from 'react';

const style = {
    width: '200px',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    backgroundColor: '#f47742',
    boxShadow: '2px 2px 2px #707070',
    color: 'white',
    padding: '5px',
    borderRadius: '5px'
};

const SwapiCharacter = props => (
    <div className="swapi-character" style={style}>
        <h2>{props.character.name}</h2>
        <p>Height: {props.character.height}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Eye Color: {props.character.eye_color}</p>
    </div>
)

export default SwapiCharacter;
import React, { Component } from 'react';
import SwapiCharacter from './SwapiCharacter';

class SwapiContainer extends Component {
    constructor() {
        super();

        this.state = {
            swapiResults: []
        }

        this.fetchFromSwapi = this.fetchFromSwapi.bind(this);
    }

    fetchFromSwapi() {
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then(data => this.setState({ swapiResults: data.results }));
    }
    
    render() {
        const renderSwapiCharacters = this.state.swapiResults.map((character, index) => <SwapiCharacter character={character} key={index} />)

        return (
            <React.Fragment>
                <button onClick={this.fetchFromSwapi}>Fetch From Swapi</button>
                <div>
                    {renderSwapiCharacters}
                </div>
            </React.Fragment>
        )
    }
}

export default SwapiContainer;
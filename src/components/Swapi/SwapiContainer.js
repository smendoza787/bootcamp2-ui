import React, { Component } from 'react';
import SwapiCharacter from './SwapiCharacter';
import { connect } from 'react-redux';

import { swapiActionCreators } from '../../store/action-creators';
import { characterSelector } from '../../store/selectors';

class SwapiContainer extends Component {
    constructor() {
        super();

        this.fetchFromSwapi = this.fetchFromSwapi.bind(this);
    }

    fetchFromSwapi() {
        this.props.fetchSwapiCharacters();
    }

    renderSwapiCharacters() {
        if (this.props.characters.results) {
            return this.props.characters.results.map((character, i) => <SwapiCharacter character={character} key={i} />)
        }
    }
    
    render() {       
        return (
            <React.Fragment>
                <button onClick={this.fetchFromSwapi}>Fetch From Swapi</button>
                <div>
                    {this.renderSwapiCharacters()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    const characters = characterSelector(state);

    return {
        characters
    }
}

const mapDispatchToProps = dispatch => {
    const fetchSwapiCharacters = () => dispatch(swapiActionCreators.fetchSwapiCharacters());
    return {
        fetchSwapiCharacters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwapiContainer);
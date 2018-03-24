import React, { Component } from 'react';
import Bootcamp2 from './Bootcamp2';
import { connect } from 'react-redux';

import { messageActionCreators } from '../../store/action-creators';
import { messagesSelector } from '../../store/selectors';

class Bootcamp2Container extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleValueSubmit = this.handleValueSubmit.bind(this);
    }

    handleValueChange(event) {
        this.setState({ value: event.target.value });
    }

    handleValueSubmit(event) {
        event.preventDefault();
        this.props.addMessage(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        let renderMessages;
        if (this.props.messages.allMessages) {
            renderMessages = this.props.messages.allMessages.map((msg, i) => <Bootcamp2 value={msg} key={i} />)
        }

        return (
            <React.Fragment>
                <Bootcamp2 value={'some value'} />
                <form onSubmit={this.handleValueSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleValueChange} />
                    <input type="submit" value="Send Message" />
                </form>
                <div>
                    {renderMessages}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: messagesSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    const addMessage = message => dispatch(messageActionCreators.addMessage(message));

    return {
        addMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootcamp2Container);
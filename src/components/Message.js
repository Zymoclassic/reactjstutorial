import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : 'Welcome User'
        }
    }

    changeMessage() {
        this.setState({
            message: 'You have successfully subscribed! Thank you.'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message;
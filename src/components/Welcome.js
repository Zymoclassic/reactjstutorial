import React, { Component } from 'react';


class Welcome extends Component {
    render(){
        const {position, language} = this.props
        return <p>{position}, it is {language} Tutorials.</p>
    }
}

export default Welcome;
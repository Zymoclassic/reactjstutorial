import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         email : '',
         number : ''
      }
    }
    
    userNameHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    numberHandler = (event) => {
        this.setState({
            number : event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`Username is ${this.state.username}, Email is ${this.state.email} and Phone number is ${this.state.number}. Thank you for registering ${this.state.username}`)
        event.preventDefault()
    }

  render() {
    return (
        <form onSubmit = {this.submitHandler}>
            <div>
                <label>Username: </label>
                <input type = "text" value = {this.state.username} onChange = {this.userNameHandler}/>
            </div>
            <br/>
            <div>
                <label>Email: </label>
                <input type = "email" value = {this.state.email} onChange = {this.emailHandler}/>
            </div>
            <br/>
            <div>
                <label>Phone number: </label>
                <input type = "phone" value = {this.state.number} onChange = {this.numberHandler}/>
            </div>
            <br/>
            <button type = "submit">SUBMIT</button>
        </form>
    )
  }
}

export default Form

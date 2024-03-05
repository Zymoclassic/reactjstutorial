import React, { Component } from 'react'
import ChildC from './ChildC'

class ParentC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "button clicked"
      }

    this.theButton = this.theButton.bind(this)

    }

    theButton() {
        alert(`Hello user, ${this.state.message}`)
    }
    

  render() {
    return (
      <div>
        <ChildC buttonHandler = {this.theButton}/>
      </div>
    )
  }
}

export default ParentC

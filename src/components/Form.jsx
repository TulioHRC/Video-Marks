import React, { Component } from 'react'

class Form extends Component { // Form to add more video marks
  constructor() {
    super()
    this.state = {
      name: '',
      url: ''
    }
  }

  changeHandlerName = (event) => {
    this.setState((prevState) => ({
      name: event.target.value,
      url: prevState.url
    }))
  }

  changeHandlerUrl = (event) => {
    this.setState((prevState) => ({
      name: prevState.name,
      url: event.target.value
    }))
  }

  render() { // Add form when I learn how to use Node, express, .... with ReactJS
    return (
      <div className='form'>
    
          <input type="text" value={this.state.name} placeholder='Name' onChange={this.changeHandlerName} required />
          <input type="text" value={this.state.url} placeholder='URL' onChange={this.changeHandlerUrl} required />
          <button type="submit" onClick={() => this.props.addFunction(this.state.name, this.state.url)}>Add</button>
        
      </div>
    )
  }
}

export default Form
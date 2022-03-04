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

  render() {
    return (
      <div className='form'>
        <form action="">
          <input type="text" value={this.state.name} placeholder='Name' onChange={this.changeHandlerName} required />
          <input type="text" value={this.state.url} placeholder='URL' onChange={this.changeHandlerUrl} required />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Form
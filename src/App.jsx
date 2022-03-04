import React, { Component } from 'react'
import './App.css'
import Header from './components/Header' 
import Form from './components/Form';
import Container from './components/Container';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      marks: []
    }
  }

  render() {
    return (
      <div className="App">
      <Header name="Video Marks"/>
      <Form />
      <Container marks={this.state.marks} />
      <div className='A'>a</div>
    </div>
    )
  }
}

export default App;
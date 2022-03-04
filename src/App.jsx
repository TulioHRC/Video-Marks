import React, { Component } from 'react'
import './App.css'
import Header from './components/Header' 
import Form from './components/Form';
import Container from './components/Container';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      marks: [],
      urls: [] // To avoid repeated video marks
    }
  }

  addMark = (n, url) => { // Adding video marks to the marks list of the state
    if (!(this.state.urls.includes(url))) {
      this.setState((prevState) => ({
        marks: [...prevState.marks, [n, url]],
        urls: [...prevState.urls, url]
      }), () => console.log(this.state))
    } else {
      // Raise an error
      console.log("Repeated URL!")
    }
  }

  render() {
    return (
      <div className="App">
      <Header name="Video Marks"/>
      <Form addFunction={this.addMark} />
      <Container marks={this.state.marks} />
      <div className='A'>a</div>
    </div>
    )
  }
}

export default App;
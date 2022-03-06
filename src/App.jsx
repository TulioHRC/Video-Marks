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
      urls: [], // To avoid repeated video marks
      formMode: 0 // Form display on css
    }
  }

  addMark = (n, url) => { // Adding video marks to the marks list of the state
    if (!(url.includes("https:\\\\"))){ url = "https:\\\\" + url }

    if (!(this.state.urls.includes(url))) {
      this.setState((prevState) => ({
        marks: [...prevState.marks, [n, url]],
        urls: [...prevState.urls, url],
        formMode: prevState.formMode
      }), () => console.log(this.state))
    } else {
      // Raise an error
      console.log("Repeated URL!")
    }
  }

  newFormAppear = () => {

    this.setState((prevState => ({
      marks: prevState.marks,
      urls: prevState.urls,
      formMode: !prevState.formMode
    })), () => {
      document.getElementsByClassName('form')[0].style.display = (this.state.formMode == 0) ? 'block' : 'none'
    })
  }

  render() {
    return (
      <div className="App">
      <Header name="Video Marks"/>
      <Form addFunction={this.addMark} />
      <Container marks={this.state.marks} newFunction={this.newFormAppear} />
    </div>
    )
  }
}

export default App;
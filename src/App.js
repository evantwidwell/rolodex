import React, {Component} from 'react';
import './App.css';
import ListComponent from'./ListComponent'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  isClicked: false,
  input: '',
  data: [],
  }
  }
  
  // componentDidMount() {
  // fetch('https://randomuser.me/api?results=25')
  // .then(res => res.json())
  // .then(examples => {
  // console.log(examples);
  // this.setState({ data: examples })
  // })}
  
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(examples => {
    console.log(examples);
    this.setState({ data: examples })
    })}
  
  
  render () {
      
  console.log(this.state.data.results);
  return (
  <div className="App">
    
    {/* <ListComponent users={this.state.data.results}/> */}
    {/* {this.state.data.results.map((item, i) => {
      return (
        <div>Listing go here</div>
  
      // <ListComponent key={i} isClicked={this.state.isClicked} users={item}/>
  )
  })} */}
  </div>
  );
  }
  }

export default App;



import React, { Component } from 'react'

class MyComponent extends Component {
    componentDidMount() {
        fetch('http://example.com')
            .then(res => res.json())
            .then(examples => {
                this.setState({ data: examples })
            })
    }

    render() {
        return (
            <div>
                <h1>Welcome to our component</p>
                <p>Take a look at our data: {this.state.data}</p>
            </div>
        )
    }
}
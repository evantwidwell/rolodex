import React, {Component} from 'react';
import './App.css';
import ListComponent from './ListComponent';


class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
  isClicked: true,
  input: '',
  data: [],
  }
  }
  
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(examples => {
    console.log(examples);
    this.setState({ data: examples.results })
    })}
  
  render () {
  
  console.log(this.state.data);
  return (
  <div className="App">
    <h1>Users:</h1>
   
 {this.state.data.map((item, i) => {
    return (
      
    <ListComponent key= {item.id} index={i} users={item} isClicked={this.state.isClicked}/>
)
})}
    
  </div>
  );
  }
  }

export default App;

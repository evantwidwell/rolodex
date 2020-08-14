import React, {Component} from 'react';
import './App.css';


class ListComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
    isClicked: true,
    
    }
    }
more = () =>{
  console.log("making more info")
  this.setState({isClicked:true})
};
less = ()=>{
  this.setState({isClicked:false})
}
render(){
if(this.state.isClicked){
  return(
    <div> 
    <h3>{this.props.users.name.first}, {this.props.users.name.last}</h3>
    <img src={this.props.users.picture.thumbnail} alt='thumb'></img>
    <h3>{this.props.users.email}</h3>
    <h3>{this.props.users.cell}</h3>
    <button onClick={()=>this.less()}>Less Info?</button>
  </div>)
} else {

return (
  <div>
    <h3>{this.props.users.name.first}, {this.props.users.name.last}</h3>
    <img src={this.props.users.picture.thumbnail} alt ='thumb'></img>
    <button onClick={()=>this.more()}>More Info?</button>
  </div>
)
}}};
export default ListComponent
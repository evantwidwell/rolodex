import React, {Component} from 'react';
import './App.css';


const ListComponent = (props) => {
let click = false;

const more = () =>{
  console.log("making more info")
  click = true;
};
const less = ()=>{
  click = false;
}

if(props.isClicked){
  return(
    <div> 
    <h3>{props.users.name.first}, {props.users.name.last}</h3>
    <img src={props.users.picture.thumbnail}></img>
    <h3>{props.users.email}</h3>
    <button onClick={()=>props.lessInfo()}>Less Info?</button>
  </div>)
} else{

return (
  <div>
    <h3>{props.users.name.first}, {props.users.name.last}</h3>
    <img src={props.users.picture.thumbnail}></img>
    <button onClick={()=>props.moreInfo()}>More Info?</button>
  </div>
)
}};

export default ListComponent
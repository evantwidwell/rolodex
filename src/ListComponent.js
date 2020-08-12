import React from 'react';
import './App.css';


const ListComponent = (props) => {
  
    
const nameList = props.users.results.map(name => <h2>{name}</h2>)
return <div>{nameList}</div>}


export default ListComponent
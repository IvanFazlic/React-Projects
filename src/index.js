import React from "react"
import ReactDom from 'react-dom';
function BookList(){
    return(
      <div>
        <Person></Person>
        <Message></Message>
      </div>
    );
}
const Person=()=> <h2>Ivan Fazlic</h2>;
const Message=()=>{
  return <p>Obicna poruka</p>;
}
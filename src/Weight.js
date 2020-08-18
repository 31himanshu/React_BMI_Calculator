import React from "react";
import ReactDOM from "react-dom";
  

function Weight(props){

  return (
<div className="card" >
  <div className="container">
<p><b>My Weight:{props.weight}</b></p>
</div>
</div>
  )
}

export default Weight;
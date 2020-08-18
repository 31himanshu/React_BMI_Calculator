import React from "react";
import ReactDOM from "react-dom";
  

function Height (props){

  return (
<div className="card" >
  <div className="container">
<p><b>My Height:{props.height}</b></p>
</div>
</div>
  )
}

export default Height;
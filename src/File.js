import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Height from "./Height";
import Weight from "./Weight";
import {connect} from "react-redux"
import {BrowserRouter as Router,Route,Link,IndexRoute,hashHistory} from "react-router-dom";
import "./styles.css"
class File extends Component {
 
    render() {
 
  return (
     
      <div className="App">
         

       <Header/>
       <div className="card">
       <Height height={this.props.height} />
<input onChange={this.props.onAgeUp} placeholder="cm"/>
</div>
<div className="card">
<Weight weight={this.props.mass}/>
<input onChange={this.props.onAgeDown} placeholder="kgs"/>
</div>

<button className="button" onClick={this.props.onUpdateBmi}>CHECK</button>
<div>
  <p>{this.props.bmi}</p>
  <p>{this.props.result}</p>
  </div>
  <div>
   <Link to="/"> <button> BACK TO HOME</button></Link>
    </div>
      </div>
       
    );
  }
}

const mapStateToProps=(state)=>{
  return {
  height:state.height,
  mass:state.mass,
  bmi:state.bmi,
  result:state.result,
  input:state.input,
  show:state.show
  }
  };
  const mapDispatchToProps=(dispatch)=>{
    return (
     {
       onAgeUp:(event)=>dispatch({type:"AGE_UP",height:event.target.value}),
  onAgeDown:(event)=>dispatch({type:"AGE_DOWN",weight:event.target.value}),
      onUpdateBmi:()=>dispatch({type:"bmi"}),
  onToggle:()=>dispatch({type:"TOGGLE"})
  });
    
  }
  

export default connect(mapStateToProps,mapDispatchToProps)  (File);

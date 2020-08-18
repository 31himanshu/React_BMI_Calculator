import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Height from "./Height";
import Weight from "./Weight";
import {connect} from "react-redux"
import "./styles.css"
class App extends Component {
 
      
  
  
  render() {
 
  return (
     <div className="App">
       <Header/>
       <div>
       <Height height={this.props.height}/> 
       <input onChange={this.props.onAgeUp}/>
   </div>
 <div >
 <Weight weight={this.props.mass}/>   
 <input onChange={this.props.onAgeDown}/>
 
 </div>
 <button className="button" onClick={this.props.onUpdateBmi}>checkbmi</button>
 <div>
   <div className="result"><p>{this.props.bmi}</p>
   </div>
 </div>
       </div>
      
       
    );
  }
}

const mapStateToProps=(state)=>{
  return {
  height:state.height,
  mass:state.mass,
  bmi:state.bmi
  }
  };
  const mapDispatchToProps=(dispatch)=>{
    return (
     {
       onAgeUp:(event)=>dispatch({type:"AGE_UP",height:event.target.value}),
  onAgeDown:(event)=>dispatch({type:"AGE_DOWN",weight:event.target.value}),
      onUpdateBmi:()=>dispatch({type:"bmi"})
  
  });
    
  }
  

export default connect(mapStateToProps,mapDispatchToProps)  (App);

import React from "react";
import ReactDOM from "react-dom";

import{connect} from "react-redux";
function Header (props){
const date=new Date();
const  time=date.getHours();
let greeting="";
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
return(
  <div className="header" >
    <p><b>{greeting} {props.input} </b></p>
    <p><b> BMI CALCULATOR</b></p>
    </div >
)
} 
const mapStateToProps=(state)=>{
  return {
  height:state.height,
  mass:state.mass,
  bmi:state.bmi,
  result:state.result,
input:state.input
  }
  };

export default connect(mapStateToProps) (Header);
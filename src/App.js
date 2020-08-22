import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import File from "./File";
import First from "./First";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Nav from "./Nav";

import SignUp from "./Formik";


class App extends Component {

  render() {

    return (

      <Router>
        <Switch>
         
        <Route path="/bmimale" component={File} />
        
        <Route path="/" component={Nav} />

        <Route path="/female" component={First} />

        
        <Route path="/login" component={SignUp} />
     </Switch>
      </Router>
    );
  }
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
  const mapDispatchToProps=(dispatch)=>{
    return (
     {
       onAgeUp:(event)=>dispatch({type:"AGE_UP",height:event.target.value}),
  onAgeDown:(event)=>dispatch({type:"AGE_DOWN",weight:event.target.value}),
      onUpdateBmi:()=>dispatch({type:"bmi"})
  
  });
    
  }
export default connect(mapStateToProps,mapDispatchToProps)( App);

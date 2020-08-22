import React from "react";
import {Link} from "react-router-dom"
import "./styles.css"
import {Nav,Navbar,Button,Card} from "react-bootstrap";
import {connect} from "react-redux";
import body from "./Images/body.jpg";
function NavPage(props){
return(
<div className="home">
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">glomera</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/doc">Doc</Nav.Link>
      <Nav.Link href="/bmimale">About</Nav.Link>
    </Nav>
   
  </Navbar>
  
  <input className="mr-auto myhomeinput" type="text" required onChange={props.onChangeInput} placeholder="your name here"/>
   <div className="inputcolor"><b><i>{props.input}</i></b></div>
  <div class="h-100 row align-items-center ">
    <div class="col">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={body} />
  <Card.Body>
    <Card.Title>BMI-CALCULATOR</Card.Title>
    <Card.Text>
    BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. 
    </Card.Text>
    <Link to="/bmimale"><Button variant="primary"> Let's Go </Button></Link>
  </Card.Body>
</Card>
</div>
</div>
 
  
  

  </div>
)
}
const mapStateToProps=(state)=>{
  return {
  height:state.height,
  mass:state.mass,
  bmi:state.bmi,
  result:state.result,
input:state.input,
auth:state.auth
  }
  };
  const mapDispatchToProps=(dispatch)=>{
    return (
     {
       onChangeInput:(event)=>dispatch({type:"CHANGE_INPUT",header:event.target.value}),
  
  
  });
    
  }
export default connect(mapStateToProps,mapDispatchToProps)(NavPage);
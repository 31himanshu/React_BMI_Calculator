const initialState={
  height:"",
  mass:"",
  bmi:"",
  result:"",
  input:"",
  show:false

  }
  
  function addReducer(state=initialState, action) {
   const newState={...state};
   if(action.type==="AGE_UP"){
  newState.height=action.height;
   }
   if(action.type==="AGE_DOWN"){
  newState.mass=action.weight;
   }
   if(action.type==="bmi"){
     newState.bmi=(newState.mass/(newState.height*0.01)**2).toFixed(2);
     if (newState.bmi < 18.5) {
      newState.result=  "Underweight";
      } else if (newState.bmi > 18.5 && newState.bmi < 25) {
        newState.result = "Normal Weight";
      } else if (newState.bmi >= 25 && newState.bmi < 30) {
        newState.result= "Overweight";
      } else {
        newState.result= "Obesity";
      }
    
   }
   if(action.type==="CHANGE_INPUT"){
newState.input=action.header;

   }
   if(action.type==="TOGGLE"){
     newState.show=!newState.show;
   }
   return newState;
  }
  
  export default addReducer;
  
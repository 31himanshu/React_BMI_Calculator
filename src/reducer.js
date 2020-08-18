const initialState={
  height:"",
  mass:"",
  bmi:""
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
     newState.bmi=newState.mass/(newState.height*0.01)**2;
   }
   return newState;
  }
  
  export default addReducer;
  
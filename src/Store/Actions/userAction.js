import axios from 'axios';
let URL = "http://localhost:8000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
  
};

const credensials = { credensials: true };


export const  userLoginAction=(user)=>async(dispatch)=>{
    dispatch({ type: "loginUserRequest" });

try {
  
    const { data } = await axios.post(
      `${URL}/api/login`,
      user,
      config,
      credensials
    );
    // store cookie in  local storage
         window.localStorage.setItem("token", JSON.stringify(data.token));


  

    dispatch({
      type: "loginUserSuccess",
      payload: data.message,
    });
  
} catch (error) {

 dispatch({
  type:"loginUserFail",

 })
  
}

}

// load user 


export const loadUserProfile=()=>async(dispatch)=>{
  dispatch({type:"loadUserRequest"});

  try {
 const { data } = await axios.get(
      `${URL}/api/profile`,
      config,
      credensials
    );
dispatch({
  type:'loadUserSuccess',
  payload:data.user
})
    
  } catch (error) {
    dispatch({
      type:'loadUserFail'
    })
    
  }

}
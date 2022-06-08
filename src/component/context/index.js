import { useEffect } from "react";
import { useReducer, createContext } from "react";


const initialState = {
  user: null,
  courseList: null,
  singleCourse: null,
  student:null
};
const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "GET_COURSE":
      return { ...state, courseList: action.payload };
    case "LOAD_USER":
      return {...state,student:action.payload}  
    default:
      return state;
  }
};
// context provider

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(async() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
    dispatch({
      type: "GET_COURSE",
      payload: JSON.parse(window.localStorage.getItem("courseList")),
    });

    // get user profile
  // const { token } = JSON.parse(window.localStorage.getItem("user"));
  //   const data = await getUserInfo(token);
  //    dispatch({
  //      type: "LOAD_USER",
  //      payload: data,
  //    });
   
    
  }, []);


  // protet csrf attect 

  // useEffect(()=>{

  //   const getCsrfToken=async()=>{
  //     const {data}=await axios.get("/api/csrf-token");
     
  //     axios.defaults.headers["X-CSRF-Token"]=data.getCsrfToken;
      
  //   }
  //   getCsrfToken();
  // },[])


  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export { Context, Provider };

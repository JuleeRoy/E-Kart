// first create Context
// next create provider nd it is like deliver boy who deliver our data
// next part is consumer who get data for that  here we have concept useContext

// import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/productReducer";
import {myData} from "../data/myData"

const AppContext = createContext(); //create context

// const API = "https://api.pujakaitem.com/api/products";

const DataProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading:false,
    isSingleError:false,
    singleProduct:{},
  };

  const [state, dispatch] = useReducer(reducer, initialState); // userReducer take two argument first reducerfunction which i have imported nd second is initial state which is i declared.
  console.log("first",myData)
  
// ** code for getting all data from  api starts here
  const getPrducts = async () => {
    dispatch({ type: "SET_LOADING" });
   try {
      // const res = await axios.get(url);
      // const myProducts = await res.data;
      // console.log(myProducts);

       // Simulating API call by using myData directly
       const myProducts = myData;
       dispatch({ type: "SET_API_DATA", payload: myProducts });

      // dispatch({ type: "SET_API_DATA", payload: myProducts });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    } //dispatch is used to invoke reducer function
  };

  useEffect(() => {
    getPrducts();
    // getData();
  }, []);


// ** code for getting all data from  api  ends here

//**  code for getting singleData from  api START here
   const getSingleProduct= async(product)=>{
    dispatch({type:"SET_SINGLE_LOADING"});
         try {
         
            // const res= await axios.get(url);
            // const product=await res.data;
            console.log(product)
            dispatch({type:"SET_SINGLE_PRODUCT" , payload:product})
         } catch (error) {
            console.log(error)
             dispatch({type:"SET_SINGLE_ERROR"})
         }
   }

//**  code for getting singleData from  api ENDS here


  return (
    <AppContext.Provider value={{ ...state  , getSingleProduct }} >{children} </AppContext.Provider>
  );
}; //define provider here chlidren represent data

// custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { DataProvider, AppContext, useProductContext };



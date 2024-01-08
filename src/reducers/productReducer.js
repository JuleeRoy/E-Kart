// here productReducer is a function who invoked when dispatch is called nd it a reducer of useReducerHook.nd it always return state

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_API_DATA":
      const featuredData = action.payload.filter((element) => {
        return element.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload, // containe all api data
        featuredProducts: featuredData,
      };

    case"SET_SINGLE_PRODUCT":
    return{
        ...state,
        singleProduct:action.payload,
        isSingleLoading:false
    }
    case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isSingleError: true,
        };




    default:
      return {
        ...state,
      };
  }
};

export default productReducer;

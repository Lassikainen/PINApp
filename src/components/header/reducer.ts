import {
    CHANGE_PAGE
  } from "../../redux/actionConstants";
  
  const initialState = {
    currentPage :"generate"
  };
  
  export function headerReducer(
    state = initialState,
    action: { data: any; type: string }
  ) {
    switch (action.type) {
      case CHANGE_PAGE:
        return {
          ...state,
          currentPage: action.data.newPage
        };
      default:
        return state;
    }
  }
  
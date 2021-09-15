import { authAPI } from "../../api/api.js";

const authReducerID = 'laundry-website/authReducer';
const SET_ERROR_MESSAGE = `${authReducerID}/SET_ERROR_MESSAGE`;

const initialState = {
   errorMessage: null,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ERROR_MESSAGE: {
         return { ...state, errorMessage };
      }
      default: return state;
   }
}

const setErrorMessageAC = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage });

export const signUpThunkCreater = (data) => {
   return async (dispatch) => {
      const response = await authAPI.signUpRequest(data);
      console.log(response);
   }
}


export default authReducer;
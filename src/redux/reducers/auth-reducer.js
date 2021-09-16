import { authAPI } from "../../api/api.js";
import { setUserDataThunkCreater } from './user-reducer.js';

const authReducerID = 'laundry-website/authReducer';
const SET_TOKEN = `${authReducerID}/SET_TOKEN`;
const SET_ERROR_MESSAGE = `${authReducerID}/SET_ERROR_MESSAGE`;

const initialState = {
   token: null,
   errorMessage: null,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_TOKEN: {
         return { ...state, token: action.token };
      }
      case SET_ERROR_MESSAGE: {
         return { ...state, errorMessage: action.errorMessage };
      }
      default: return state;
   }
}

const setTokenAC = (token) => ({ type: SET_TOKEN, token });
const setErrorMessageAC = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage });

export const loginThunkCreater = (data) => {
   return async (dispatch) => {
      try {
         const response = await authAPI.getTokenRequest(data);
         const tokenVerify = await authAPI.verifyTokenRequest(response.access);
         localStorage.setItem('token', response.access);
         dispatch(setUserDataThunkCreater());
         dispatch(setTokenAC(response.access));
         dispatch(setErrorMessageAC(null));
      } catch {
         dispatch(setErrorMessageAC('Что-то пошло не так, попробуйте ещё раз'));
      }
   }
}


export default authReducer;
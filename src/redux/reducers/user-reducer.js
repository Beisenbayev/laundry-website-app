import { userAPI } from '../../api/api.js';

const userReducerID = 'laundry-website/userReducer';
const SET_USER_DATA = `${userReducerID}/SET_USER_DATA`;
const SET_USER_SETTINGS = `${userReducerID}/SET_USER_SETTINGS`;

const initialState = {
   userData: null,
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, userData: action.data };
      }
      case SET_USER_SETTINGS: {
         return {
            ...state, userData: {
               ...state.userData, settings: action.settings
            }
         }
      }
      default: return state;
   }
};

const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const setUserSettingsAC = (settings) => ({ type: SET_USER_SETTINGS, settings });

export const setUserDataThunkCreater = () => {
   return async (dispatch) => {
      const response = await userAPI.getUserDataRequest();
      console.log(response);
      dispatch(setUserDataAC(response));
   }
}

export const updateUserSettingsThunkCreater = (notify) => {
   return async (dispatch) => {
      const response = await userAPI.updateUserSettingRequest(notify);
      console.log(response);
      dispatch(setUserSettingsAC(response));
   }
}


export default userReducer;
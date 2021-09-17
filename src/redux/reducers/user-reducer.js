import { userAPI } from '../../api/api.js';

const userReducerID = 'laundry-website/userReducer';
const SET_USER_DATA = `${userReducerID}/SET_USER_DATA`;
const SET_USER_SETTINGS = `${userReducerID}/SET_USER_SETTINGS`;
const SET_IS_ACTIVE = `${userReducerID}/SET_IS_ACTIVE`;

const initialState = {
   userData: null,
   isActive: false,
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            userData: action.data,
            isActive: action.data.is_active
         };
      }
      case SET_USER_SETTINGS: {
         return {
            ...state, 
            userData: { ...state.userData, settings: action.settings }
         }
      }
      case SET_IS_ACTIVE: {
         return {
            ...state,
            userData: { ...state.userData, is_active: action.isActive },
            isActive: action.isActive
         };
      }
      default: return state;
   }
};

const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const setUserSettingsAC = (settings) => ({ type: SET_USER_SETTINGS, settings });
const setIsActiveAC = (isActive) => ({ type: SET_IS_ACTIVE, isActive });

export const setUserDataThunkCreater = () => {
   return async (dispatch) => {
      const response = await userAPI.getUserDataRequest();
      dispatch(setUserDataAC(response));
   }
}

export const updateUserSettingsThunkCreater = (notify) => {
   return async (dispatch) => {
      const response = await userAPI.updateUserSettingRequest(notify);
      dispatch(setUserSettingsAC(response));
   }
}

export const logoutThunkCreater = () => {
   return async (dispatch) => {
      dispatch(setIsActiveAC(false));
      localStorage.clear();
   }
}


export default userReducer;
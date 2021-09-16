import { productsAPI } from '../../api/api.js';

const productsReducerID = 'laundry-website/productsReducer';
const SET_CATEGORIES = `${productsReducerID}/SET_CATEGORIES`;   //Categories
const SET_PRODUCTS = `${productsReducerID}/SET_PRODUCTS`;

const initialState = {
   categories: null,
   productsList: null,
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CATEGORIES: {
         return { ...state, categories: action.categories };
      }
      case SET_PRODUCTS: {
         return { ...state, productsList: action.products };
      }
      default: return state;
   }
}

const setCategoriesAC = (categories) => ({ type: SET_CATEGORIES, categories });
const setProductsAC = (products) => ({ type: SET_PRODUCTS, products });

export const setCategoriesThunkCreater = () => {
   return async (dispatch) => {
      const response = await productsAPI.getCategoriesRequest();
      dispatch(setCategoriesAC(response));
   }
}

export const setProductsThunkCreater = (category, search) => {
   return async (dispatch) => {
      const response = await productsAPI.getProductsRequest(category, search);
      dispatch(setProductsAC(response));
   }
}


export default productsReducer;
import { productsAPI } from '../../api/api.js';

const productsReducerID = 'laundry-website/productsReducer';
const SET_CATEGORIES = `${productsReducerID}/SET_CATEGORIES`;
const SET_PRODUCTS = `${productsReducerID}/SET_PRODUCTS`;
const SET_BASKET_LIST = `${productsReducerID}/SET_BASKET_LIST`;
const FINISH_SHOPPING = `${productsReducerID}/FINISH_SHOPPING`;

const initialState = {
   categories: null,
   productsList: null,
   basketList: [],
   selectedServices: {},
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_CATEGORIES: {
         return { ...state, categories: action.categories };
      }
      case SET_PRODUCTS: {
         return { ...state, productsList: action.products };
      }
      case SET_BASKET_LIST: {
         return { ...state, basketList: action.basketList };
      }
      case FINISH_SHOPPING: {
         return { ...state, basketList: [], selectedServices: {} };
      }
      default: return state;
   }
}

const setCategoriesAC = (categories) => ({ type: SET_CATEGORIES, categories });
const setProductsAC = (products) => ({ type: SET_PRODUCTS, products });
const setBasketListAC = (basketList) => ({ type: SET_BASKET_LIST, basketList });
const finishShoppingAC = () => ({ type: FINISH_SHOPPING });

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

export const setBasketProductsThunkCreater = () => {
   return (dispatch, getState) => {
      const selectedServices = getState().products.selectedServices;
      const basketListPromises = Object.keys(selectedServices).map(item => {
         return productsAPI.getProductByIdRequest(item)
            .then(response => response);
      });

      Promise.all(basketListPromises)
         .then(results => {
            dispatch(setBasketListAC(results))
         });
   }
}

export const finishShoppingThunkCreater = () => {
   return (dispatch, getState) => {
      localStorage.setItem('selectedServices', JSON.stringify(getState().products.selectedServices), null, 2);
      dispatch(finishShoppingAC());
      console.log('Ваш заказ: ', localStorage.getItem('selectedServices'));
      localStorage.removeItem('selectedServices');
   }
}


export default productsReducer;
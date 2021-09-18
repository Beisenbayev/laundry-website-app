import { productsAPI } from '../../api/api.js';

const productsReducerID = 'laundry-website/productsReducer';
const SET_CATEGORIES = `${productsReducerID}/SET_CATEGORIES`;
const SET_PRODUCTS = `${productsReducerID}/SET_PRODUCTS`;
const SET_BASKET_LIST = `${productsReducerID}/SET_BASKET_LIST`;
const UPDATE_SELECTED_SERVICES = `${productsReducerID}/UPDATE_SELECTED_SERVICES`;
const FINISH_SHOPPING = `${productsReducerID}/FINISH_SHOPPING`;

const initialState = {
   categories: null, //main categories
   productsList: null, //services
   basketList: [], //data of services wich were selected (from server)
   selectedServices: {}, //services wich were selected (only list)
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
      case UPDATE_SELECTED_SERVICES: {
         const asArray = Object.entries({ ...state.selectedServices, ...action.service });
         const filtered = asArray.filter(([key, value]) => value > 0);
         const filteredObject = Object.fromEntries(filtered);

         return { ...state, selectedServices: filteredObject }
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
const updateSelectedServicesAC = (service) => ({ type: UPDATE_SELECTED_SERVICES, service });
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

export const updateSelectedServicesThunkCreater = (service) => {
   return (dispatch) => {
      dispatch(updateSelectedServicesAC(service));
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
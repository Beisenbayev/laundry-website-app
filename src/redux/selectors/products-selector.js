export const getCategoriesSelector = (state) => {
   return state.products.categories;
}

export const getProductsListSelector = (state) => {
   return state.products.productsList;
}

export const getBasketListSelector = (state) => {
   return state.products.basketList;
}

export const getSelectedServicesSelector = (state) => {
   return state.products.selectedServices;
}
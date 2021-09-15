import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://api.doover.tech/api/',
});

export const authAPI = {
   signUpRequest: async (data) => { //{email, password}
      const response = await instance.post('token​', data);
      return response;
   },
}

export const userAPI = {
   getUserDataRequest: async () => {
      const response = await instance.get('users/me');
      return response;
   },
   getUserSettingsRequest: async () => {
      const response = await instance.get('users​/settings​');
      return response;
   },
   updateUserSettingRequest: async (notify) => { //{notify}
      const response = await instance.put('users​/settings​', { notify });
      return response;
   }
}

export const productsAPI = {
   getProductsRequest: async (category, search) => {
      const response = await instance.get(`products?category=${category}&search=${search}`);
      return response;
   },
   getCategoriesRequest: async () => {
      const response = await instance.get('products/categories');
      return response;
   },
   getProductByIdRequest: async (id) => {
      const response = await instance.get(`products/${id}`);
      return response;
   }
}
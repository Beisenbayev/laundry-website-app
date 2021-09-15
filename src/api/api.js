import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://api.doover.tech/api/',
   headers: {
      'Content-Type': 'application/json',
   },
});

export const authAPI = {
   getTokenRequest: async (data) => { //{email, password}
      const response = await instance.post('token/', data);
      return response.data;
   },
   verifyTokenRequest: async (token) => {
      const response = await instance.post('token/verify/', { token });
      return response.data;
   },
}

export const userAPI = {
   getUserDataRequest: async () => {
      const response = await instance.get('users/me');
      return response.data;
   },
   getUserSettingsRequest: async () => {
      const response = await instance.get('users​/settings​');
      return response.data;
   },
   updateUserSettingRequest: async (notify) => { //{notify}
      const response = await instance.put('users​/settings​', { notify });
      return response.data;
   }
}

export const productsAPI = {
   getProductsRequest: async (category, search) => {
      const response = await instance.get(`products?category=${category}&search=${search}`);
      return response.data;
   },
   getCategoriesRequest: async () => {
      const response = await instance.get('products/categories');
      return response.data;
   },
   getProductByIdRequest: async (id) => {
      const response = await instance.get(`products/${id}`);
      return response.data;
   }
}
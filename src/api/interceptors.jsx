import axios from "axios";
import { store } from './../redux/store';

const axiosJwt = axios.create({
    baseURL: 'http://localhost:5174'
});
const accessToken = JSON.parse(localStorage.getItem('user')).token;

axiosJwt.interceptors.request.use(
    async (config) => {
    //   const accessToken = store.getState().token.token;
    //   const expireIn = jwtDecode(accessToken).exp * 1000;
    //   const now = new Date().getTime();
  
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config
        // if (expireIn < now) {
        //   try {
        //     const newAccessToken = await refreshToken();
        //     config.headers.Authorization = `Bearer ${newAccessToken}`;
        //     store.dispatch(setToken(newAccessToken));
        //     console.log('masuk');
        //   } catch (error) {
        //     console.error('Error refreshing access token:', error);
        //     throw error;
        //   }
        // }
        // return config; 
      }
      // return config; 
    },
    (error) => {
      return Promise.reject(error);
    }
  )
export default axiosJwt;
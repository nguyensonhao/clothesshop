import axios from "axios";
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export const loginAuthAsync = (data) => {
    return axios.post("https://api-coffeeshop.cosplane.asia/api/user/LoginUser", data);
}

export const registerAuthAsync = (data) => {
    return axios.post("https://api-coffeeshop.cosplane.asia/api/user/RegisterAccount", data);
}
export const getListProductAsync = (page,size) => {
    // const data = {
    //     id: pagenumber,
    //     Pagesize: pagesize
    // }
    return axios.get(`http://api-coffeeshop.cosplane.asia/api/product/GetAllProducts?PageNumber=${page}&Pagesize=${size}`);
}
export const getDetailProductAsync = (id) => {
    return axios.get(`https://api-coffeeshop.cosplane.asia/api/product/GetProductsById?id=${id}`);
}
// Get Detail User by email
export const getDetailUserByEmailAsync = (email) => {
    return axios.get(`https://api-coffeeshop.cosplane.asia/api/user/GetDetailUserByEmail?email=${email}`);
}
// Check out shopping cart
export const checkOutShoppingCartAsync = (data) => {
    return axios.post("", data);
}

export default axiosClient;
import axios from 'axios';

export const getAllProducts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/`);
    return res.data;
}

export const getSearchResults = async (userId, key) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/search?keyword=${key}&userId=${userId}`);
    return res;
}

export const sendVisitor = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/visitor/add`);
}

export const addLikedProduct = async (userId, productId) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/products/add/liked`, 
        {
            userId: userId, 
            productId: productId,
        }
    );
    return res;
}

export const addViewedProduct = async (userId, productId) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/products/add/viewed`, 
        {
            userId: userId, 
            productId: productId,
        }
    );
    return res;
}


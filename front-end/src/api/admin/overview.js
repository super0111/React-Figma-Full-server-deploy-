import axios from 'axios';

export const getTopProducts = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products/top`);
    return res.data;
}

export const getNewProducts = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products/new`);
    return res.data;
}

export const getAllProducts = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products/all`);
    return res.data;
}

export const getAllNewProducts = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/products/new/all`);
    return res.data;
}

export const getTopUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/top`);
    return res.data;
}

export const getAllUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/all`);
    return res.data;
}

export const getYearlyData = async() => {
    const totalUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/total`);
    const visitors = await axios.get(`${process.env.REACT_APP_SERVER_URL}/visitor/yearly`);
    const totalProducts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/yearly`);
    const newUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/yearly`);
    return { 
        totalUsers: totalUsers.data.counts, 
        visitors: visitors.data.counts, 
        totalProducts: totalProducts.data.counts, 
        newUsers: newUsers.data.counts,
    };
}

export const getMonthlyData = async() => {
    const totalUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/total`);
    const visitors = await axios.get(`${process.env.REACT_APP_SERVER_URL}/visitor/monthly`);
    const totalProducts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/monthly`);
    const newUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/monthly`);
    return { 
        totalUsers: totalUsers.data.counts, 
        visitors: visitors.data.counts, 
        totalProducts: totalProducts.data.counts, 
        newUsers: newUsers.data.counts,
    };
}

export const getDailyData = async() => {
    const totalUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/total`);
    const visitors = await axios.get(`${process.env.REACT_APP_SERVER_URL}/visitor/daily`);
    const totalProducts = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/daily`);
    const newUsers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/daily`);
    return { 
        totalUsers: totalUsers.data.counts, 
        visitors: visitors.data.counts, 
        totalProducts: totalProducts.data.counts, 
        newUsers: newUsers.data.counts,
    };
}

export const adminSignUp = async(email, firstName, lastName, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/signup`, 
        {
            email,
            firstName,
            lastName,
            password,
        }
    );
    return res;
}


export const adminSignIn = async(email, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/signin`, 
        {
            email,
            password,
        }
    );
    return res;
}

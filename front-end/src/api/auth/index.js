import axios from 'axios';

export const signInWithEmail = async(userEmail, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin`, 
        {
            userEmail: userEmail,
            password: password,
        }
    );
    return res.data;
}

export const signInWithGoogle = async(email) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin/google`, 
        {
            email: email,
        }
    );
    return res.data;
}

export const signInWithFacebook = async(email, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signin/facebook`, 
        {
            email: email,
            password: password,
        }
    );
    return res.data;
}

export const signUpWithEmail = async(userEmail, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup`, 
        {
            userEmail: userEmail,
            password: password,
        }
    );
    return res.data;
}

export const signUpWithGoogle = async(email) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup/google`, 
        {
            email: email,
        }
    );
    return res.data;
}

export const signUpWithFacebook = async(data) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/signup/facebook`, 
        {
            email: data.email,
            name: data.name,
        }
    );
    return res.data;
}


export const forgotPassword = async(email) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/forgot/confirm`, 
        {
            email: email,
        }
    );
    return res.data;
}

export const resetPassword = async(token, password) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/reset/password`, 
        {
            token: token,
            password: password,
        }
    );
    return res.data;
}
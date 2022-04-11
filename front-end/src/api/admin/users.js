import axios from 'axios';

export const getAllUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/all`);
    return res.data;
}

export const getNewUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/new`);
    return res.data;
}

export const getActiveUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/active`);
    return res.data;
}

export const getSuspendedUsers = async () => {
    const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/user/suspended`);
    return res.data;
}

export const suspendById = async (id) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/suspend`, 
        {
            id,
        }
    );
    return res.data;
}

export const unSuspendById = async (id) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/unsuspend`, 
        {
            id,
        }
    );
    return res.data;
}

export const uploadAvatar = async (formData) => {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/account/upload`, formData, config);
    return res.data;
}

export const upDateProfile = async (
    id, 
    avatarPath, 
    firstName,
    lastName, 
    location, 
    shortBio) => {
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/editprofile/${id}`, 
        {
            avatarPath,
            firstName,
            lastName,
            location,
            shortBio,
        }
    );
    return res.data;
}

export const upDateAccountSetting = async (id, userName, email) => {
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/accountsetting/${id}`, 
        {
            userName,
            email,
        }
    );
    return res.data;
}

export const upDatePassword = async (id, password) => {
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/password/${id}`, 
        {
            password,
        }
    );
    return res.data;
}

export const upDateSocialProfile = async (
    id,
    twitter,
    instagram,
    dribbble,
    behance,
    isGoogle,
    isFacebook
) => {
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/social/${id}`, 
        {
            twitter, 
            instagram, 
            dribbble, 
            behance,
            isGoogle,
            isFacebook,
        }
    );
    return res.data;
}

export const upDateEmailNotification = async (id, checked) => {
    const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/emailnotification/${id}`, 
        {
            emailNotification: checked
        }
    );
    return res.data;
}

export const createCustomer = async (
    profile, 
    accountSetting, 
    password, 
    social, 
    notification
) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/create`, 
        {
            profile, 
            accountSetting, 
            password, 
            social, 
            notification
        }
    );
    return res;
}

export const deleteUsers = async (selected) => {
    const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/delete`, 
        {
            selected
        }
    );
    return res.data;
}
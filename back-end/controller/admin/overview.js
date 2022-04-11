const Users = require('../../model/Users');

const adminSignUp = async(req, res) => {
    const {
        email,
        firstName,
        lastName,
        password,
    } = req.body;
    const oldUser = await Users.find({email: email});
    if(oldUser && oldUser.length > 0){
        return res.send({
            status: 'already Exist',
            oldUser: oldUser
        })
    }

    const newAdmin = new Users({
        email,
        firstName,
        lastName,
        password,
        type: 3,
        isActive: true,
    })

    const savedAdmin = await newAdmin.save();
    res.status(200).json(savedAdmin);
}

const adminSignIn = async (req, res) => {
    const {
        email,
        password,
    } = req.body;
    const users = await Users.find({email: email});
    const user = users[0];
    if(user){
        if(password === user.password && user.type === 3){
            res.status(200).json(user);
        }else{
            return res.send({
                status: 'error',
                message: 'passwrod not matched'
            })
        }
    }else{
        return res.send({
            status: 'error',
            message: 'User is not existed'
        });
    }
}

const isFilled = (userInfo) => {
    if(userInfo.userName && userInfo.firstName && 
        userInfo.lastName && userInfo.email && userInfo.password && 
        userInfo.twitter && userInfo.instagram && userInfo.dribbble &&
        userInfo.behance){
            return true;
        }else{
            return false;
        }
}

const upDateProfile = async (req, res) => {
    const { id } = req.params;
    const {
        avatarPath,
        firstName,
        lastName,
        location,
        shortBio,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.avatarPath = avatarPath;
    user.firstName = firstName;
    user.lastName = lastName;
    user.location = location;
    user.shortBio = shortBio;

    if(isFilled(user)) user.isActive = true;

    const saveduser = await user.save();
    res.status(200).json(saveduser);
}


const upDateAccountSetting = async (req, res) => {
    const { id } = req.params;
    const {
        userName,
        email,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.userName = userName;
    user.email = email;

    if(isFilled(user)) user.isActive = true;

    const saveduser = await user.save();
    res.status(200).json(saveduser);
}

const upDatePassword = async (req, res) => {
    const { id } = req.params;
    const {
        password,
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }
    user.updatedAt = Date.now();
    user.password = password;

    if(isFilled(user)) user.isActive = true;

    const saveduser = await user.save();
    res.status(200).json(saveduser);
}


const upDateSocialProfile = async (req, res) => {
    const { id } = req.params;
    const {
        twitter, 
        instagram, 
        dribbble, 
        behance,
        isGoogle,
        isFacebook
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.twitter = twitter;
    user.instagram = instagram;
    user.dribbble = dribbble;
    user.behance = behance;
    user.isGoogle = isGoogle;
    user.isFacebook = isFacebook;

    if(isFilled(user)) user.isActive = true;

    const saveduser = await user.save();
    res.status(200).json(saveduser);
}

const upDateEmailNotification = async (req, res) => {
    const { id } = req.params;
    const {
        emailNotification, 
    } = req.body;
    
    const user = await Users.findById(id);
    if(!user){
        return res.status(404).send({
            message: `user with ID: ${id} does not exist in database.`,
        });
    }

    user.updatedAt = Date.now();
    user.emailNotification = emailNotification;

    if(isFilled(user)) user.isActive = true;

    const saveduser = await user.save();
    res.status(200).json(saveduser);
}


const createCustomer = async(req, res) => {
    const {
        profile, 
        accountSetting, 
        password, 
        social, 
        notification,
    } = req.body;
    const { avatarPath, firstName, lastName } = profile;
    const { userName, email } = accountSetting;

    const newAdmin = new Users({
        avatarPath,
        firstName,
        lastName,
        location: profile?.location,
        shortBio: profile?.shortBio,
        userName,
        email,
        twitter: social?.twitter, 
        instagram: social?.instagram, 
        dribbble: social?.dribbble, 
        behance: social?.behance, 
        isGoogle: social?.isGoogle, 
        isFacebook: social?.isFacebook,
        type: 3,
        isActive: false,
    })
    const savedAdmin = await newAdmin.save();
    res.status(200).json(savedAdmin);
}

const deleteUser = async(req, res) => {
    const {
        selected, 
    } = req.body;
    await Promise.all(selected.map(async (id) => {
        await Users.findByIdAndDelete(id);
    }));
    const users = await Users.find({});
    res.status(200).json(users);
}
module.exports = {
    adminSignUp,
    adminSignIn,
    upDateProfile,
    upDateAccountSetting,
    upDatePassword,
    upDateSocialProfile,
    upDateEmailNotification,
    createCustomer,
    deleteUser,
};
  

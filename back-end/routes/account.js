const router = require('express').Router();

const { 
    getUserInfoById,
    uploadAvatar, 
    upDateProfile, 
    upDateAccountSetting, 
    upDatePassword,
    upDateSocialProfile,
    upDateEmailNotification,
} = require('../controller/users');

router.post('/upload', uploadAvatar);

router.get('/detail', getUserInfoById);

router.put('/editprofile/:id', upDateProfile);
router.put('/accountsetting/:id', upDateAccountSetting);
router.put('/password/:id', upDatePassword);
router.put('/social/:id', upDateSocialProfile);
router.put('/emailnotification/:id', upDateEmailNotification);

module.exports = router;

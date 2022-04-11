const router = require('express').Router();

const {
    adminSignUp,
    adminSignIn,
    upDateProfile,
    upDateAccountSetting,
    upDatePassword,
    upDateSocialProfile,
    upDateEmailNotification,
    createCustomer,
    deleteUser
} = require('../controller/admin/overview');

router.post('/signup', adminSignUp);
router.post('/signin', adminSignIn);
router.post('/create', createCustomer);
router.post('/delete', deleteUser);

router.put('/editprofile/:id', upDateProfile);
router.put('/accountsetting/:id', upDateAccountSetting);
router.put('/password/:id', upDatePassword);
router.put('/social/:id', upDateSocialProfile);
router.put('/emailnotification/:id', upDateEmailNotification);

module.exports = router;

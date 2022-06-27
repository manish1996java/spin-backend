const router = require('express').Router();
const {userLogin,userSignup,sendOtp,forgetPassword} = require('../controllers/user');

router.get('/login',userLogin);
router.post('/signup',userSignup);
router.get('/sendOtp',sendOtp);
router.get('/forgetPasword',forgetPassword);

module.exports = router;
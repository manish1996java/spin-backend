const UserModel = require('../models/user');

const userLogin = (req,res)=>{
    console.log('userLogin');
    res.status(200).json({
        msg:"successfull"
    })
}

const userSignup = (req,res)=>{
    console.log('userSignup');
    const user = new UserModel({
        userName:'manish@dev',
        password:'manish@123',
        isActive:false
    })
    user.save().then((user)=>{
        console.log('user',user);
    }).catch((err)=>{
        console.log('err',err);
    })
    res.status(200).json({
        msg:"successfull"
    })
}

const forgetPassword = (req,res)=>{
    console.log('forgetPassword');
    res.status(200).json({
        msg:"successfull"
    })
}
const sendOtp = (req,res) =>{
    console.log('sendOTP');
    res.status(200).json({
        msg:"successfull"
    })
}

module.exports = {
    userLogin,
    userSignup,
    forgetPassword,
    sendOtp,
}
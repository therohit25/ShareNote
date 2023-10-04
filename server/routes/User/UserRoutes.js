const contactform = require('../../controllers/contactform');
const { sendUserDetails, isloggedin } = require('../../controllers/isloggedin');
const logout = require('../../controllers/logout');
const signinform = require('../../controllers/signinform');
const signupform = require('../../controllers/signupform');

const userroute = require('express').Router();

userroute.route('/sendUserDetails').get(sendUserDetails)
userroute.route('/logout').get(logout)
userroute.route('/signinform').post(signinform)
userroute.route('/signupform').post(signupform)
userroute.route('/contactform').post(contactform)



module.exports = userroute

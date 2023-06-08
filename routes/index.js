const express = require('express');
const router = express.Router();
const users = require('./users');
const viewController = require('../controllers/viewController');
router.get('/' , viewController.homePage);
router.use('/users' , users);
router.get('/signup' , viewController.signupPage);
router.get('/login' , viewController.loginPage);
router.get('/dashboard' , viewController.dashboardPage)


module.exports = router;
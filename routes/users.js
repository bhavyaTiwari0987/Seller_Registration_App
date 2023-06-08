const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/signup/create' , userController.create);
router.post('/login/create_session' , userController.create_session);

module.exports = router;
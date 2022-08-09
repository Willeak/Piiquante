//appel des middlewares
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//route de signup et login
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
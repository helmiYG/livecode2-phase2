var express = require('express');
var router = express.Router();
var {register, login, getAllUsers} = require('../controllers/user_c');
// var isLogin = require('');
/* GET users listing. */
router.post('/', register)
      .get('/', getAllUsers)
      .post('/login', login)

module.exports = router;

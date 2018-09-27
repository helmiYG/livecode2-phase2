var express = require('express');
var router = express.Router();
var {create, getAll, search, remove, getUserPost} = require('../controllers/post_c');
var isLogin = require('../middlewares/isLogin');
/* GET users listing. */
console.log('masuk');

router.post('/', isLogin, create)
      .get('/', getAll)
      .get('/users', isLogin, getUserPost)
      .post('/search', isLogin, search)
      .delete('/:id', isLogin, remove)

module.exports = router;

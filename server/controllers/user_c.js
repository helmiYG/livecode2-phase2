const User = require('../models/user');
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


module.exports = {
    register: (req, res) => {
        let {name, email, password} = req.body
        var hash = bcrypt.hashSync(password, salt);
        User.create({
            email: email,
            name: name,
            password: hash
        })
        .then((result) => {
            res.status(201).json({
                msg: 'succes register',
                result
            })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    login: (req, res) => {

        User.findOne({email: req.body.user})
        .then((result) => {
            if (result) {
                var decrypt = bcrypt.compareSync(req.body.password, result.password)
                if (decrypt) {
                    var token = jwt.sign({
                        email: result.email,
                        name: result.name
                    }, process.env.secret)

                    res.status(201).json({
                        msg: 'succes login',
                        token,
                        id: result._id
                    })
                } else {
                    res.status(500).json({
                        msg: 'password wrong',
                        err
                    })
                }
            } else {
                User.findOne({name: req.body.user})
                .then((userLogin) => {
                    if (userLogin) {
                        var decrypt = bcrypt.compareSync(req.body.password, userLogin.password)
                        if (decrypt) {
                            var token = jwt.sign({
                                email: userLogin.email,
                                name: userLogin.name
                            }, process.env.secret)
        
                            res.status(201).json({
                                msg: 'succes login',
                                token,
                                id: userLogin._id
                            })
                        } else {
                            res.status(500).json({
                                msg: 'password wrong',
                                err
                            })
                        }
                    }
                }).catch((err) => {
                    res.status(500).json({
                        msg: 'username not found',
                        err
                    })
                });
            }
        }).catch((err) => {
            res.status(500).json({
                msg: 'email not found',
                err
            })
        });
    },

    getAllUsers: (req, res) => {
        User.count().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)
            User.findOne().skip(random).exec(
              function (err, result) {
                if (!err) {
                    res.status(201).json({
                        result
                    })
                }
              })
          })   
    }
};

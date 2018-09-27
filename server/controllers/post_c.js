var Post = require('../models/post');

module.exports = {
    create: (req, res) => {
        Post.create({
            status: req.body.status,
            userId: req.userLogin._id
        })
        .then((result) => {
            res.status(201).json({
                msg: 'create succes',
                result
            })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    getAll: (req, res) => {
        Post.find().populate('userId').sort('-date')
        .then((result) => {
            res.status(200).json({
                result
            })
        })
        .catch((err) => {
            res.status(500).json(err)
        });
    },

    search: (req, res) => {
        let word = req.body.word
        Post.find({ status: /word/i })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
    },

    getUserPost: (req, res) => {
        Post.find({userId: req.userLogin._id}).populate('userId')
        .then((result) => {
            res.status(200).json({
                result
            })
        })
        .catch((err) => {
            console.log(err);
        });
    },

    remove: (req, res) => {
        console.log('masuk');
        
        Post.findOne({_id: req.params.id})
        .then((result) => {
            if (result) {
                if (String(result.userId) == String(req.userLogin._id)) {
                    Post.deleteOne({_id: req.params.id})
                        .then((erased) => {
                            res.status(201).json({
                                msg: 'delete succes',
                                erased
                            })
                        })
                        .catch((err) => {
                            res.status(500).json(err)
                        });
                } else {
                    res.status(500).json({
                        msg: 'bukan punya enete'
                    })
                }
            } else {
                res.status(500).json({
                    msg: 'id ga ada'
                })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        });
       
    }
};

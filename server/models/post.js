const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    status: {
        type: String,
        required: [true, "statu is required"]
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
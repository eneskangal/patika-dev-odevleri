// gerekli paketler
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//şema oluşturma
const PostSchema = new Schema({
  title: String,
  detail: String,  
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

// collection oluşturma ve export etme
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
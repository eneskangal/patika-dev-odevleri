const Post= require('../models/Post');

exports.getPosts= async(req, res) =>{
    const posts= await Post.find({}).sort("-dateCreated");
    res.render("index", {posts});
};
exports.getAbout= (req, res) => {
    res.render('about');
};
exports.getAdd= (req, res) => {
    res.render('add');
};
exports.getEdit= async (req, res) =>{  
    const post=await Post.findOne({_id: req.params.id});
    res.render("edit",{
      post
    });
};
exports.getPostId= async(req, res) => {
    const post= await Post.findById(req.params.id);
    res.render("post",{
      post
    });
};
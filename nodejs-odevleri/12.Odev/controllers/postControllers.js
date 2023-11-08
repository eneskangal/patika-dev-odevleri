const Post= require('../models/Post');
exports.getUpdate= async (req, res) =>{
    const post= await Post.findOne({ _id: req.params.id });
    post.title= req.body.title;
    post.detail= req.body.detail;
    post.save();  
    res.redirect(`/posts/${req.params.id}`);
};
exports.oneDelete= async (req, res) =>{
    const post= await Post.findOne({ _id: req.params.id }); 
    await Post.findByIdAndDelete(req.params.id); 
    res.redirect('/');
};
exports.createPost= async(req, res) =>{ 
    Post.create({
        title:req.body.title,
        detail:req.body.detail
    });
    res.redirect("/");   
};
// gerekli paketler
const express= require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const path = require('path');
const ejs = require('ejs');


// express'in ana fonksiyonu değişkene atama
const app= express();

//şablon motoru
app.set("view engine", "ejs");

// Middleware
app.use(express.static('public')); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// db ye bağlanma
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// router
app.get('/', async(req, res) =>{ 
  const posts= await Post.find({}) 
  res.render("index", {posts})
})
app.get("/about", (req, res) => {
  res.render('about');
});
app.get("/add", (req, res) => {
  res.render('add');
});
app.get("/post", (req, res) => {
  res.render('post');
});
app.post('/posts', async(req, res) =>{  
  await Post.create(req.body)  
  res.redirect("/")
})

// port ve app çalıştırma
const port = 3000;
app.listen(port, () => { 
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});

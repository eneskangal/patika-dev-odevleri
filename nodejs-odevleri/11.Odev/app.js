// gerekli paketler
const express= require('express');
const mongoose= require('mongoose');
const path= require('path');
const ejs= require('ejs');
const methodOverride= require('method-override');
const pageControl=require("./controllers/pageControllers");
const postControl=require("./controllers/postControllers");


// express'in ana fonksiyonu değişkene atama
const app= express();

//şablon motoru
app.set("view engine", "ejs");

// Middleware
app.use(express.static('public')); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method',{
  methods:["POST","GET"]
}));

// db ye bağlanma
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// router
app.get('/', pageControl.getPosts);
app.get("/about", pageControl.getAbout);
app.get("/add", pageControl.getAdd);
app.get("/posts/:id", pageControl.getPostId);
app.get('/posts/edit/:id', pageControl.getEdit);

app.post('/post', postControl.createPost);
app.put('/posts/:id', postControl.getUpdate);
app.delete("/posts/:id",postControl.oneDelete);

// port ve app çalıştırma
const port= 3000;
app.listen(port, () => { 
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
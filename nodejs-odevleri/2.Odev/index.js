const posts=[
    {id:1, title:'Konu Başlığı 1', desc:'Lorem Ipsum 1'},
    {id:2, title:'Konu Başlığı 2', desc:'Lorem Ipsum 2'}
]
const listPosts=()=>{
    posts.map(post=>console.log(post))
}
const addPost= (newPost)=>{
    const promiseAddPost= new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts); 
      reject("Hata");     
    });  
    return promiseAddPost;
};  
async function showPosts() {
    try{
      await addPost({id:3, title:'Konu Başlığı 3', desc:'Lorem Ipsum 3'});
      listPosts();
    }catch (error){
      console.log(error);
    }
}  
showPosts();

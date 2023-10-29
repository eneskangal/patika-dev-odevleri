import axios from "axios";

export default async function GetData(user_id){
    const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    const {data:post}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)    
    console.log(user, post)
}
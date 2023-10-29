import FooterInfo from "./compotents/FooterInfo"
import ToDoAppFooter from "./compotents/ToDoAppFooter"
import SectionMain from "./compotents/SectionMain"
import Header from "./compotents/Header"
import './App.css';
import { useState } from "react";
let bool=true

function App() {  
  const [toDoItems, setToDoItems]=useState([
    {title: "Learn JavaScript", checked:true},
    {title: "Learn React", checked:false},
    {title: "Have a life!", checked:false}
  ])
  const [constToDoItems, setConstToDoItems]=useState(toDoItems)   
  const adBulamadım=function(e){
    if(e.target.innerHTML=="All"){
      setToDoItems(constToDoItems)   
    }
    else if(e.target.innerHTML=="Active"){
      setToDoItems(constToDoItems.filter(i=>i.checked==false))
    }
    else{
      setToDoItems(constToDoItems.filter(i=>i.checked==true))
    }    
  }
  const rastgeleFonksiyon= function(){
    setToDoItems(toDoItems.filter(e=>e.checked==false)) 
    setConstToDoItems(constToDoItems.filter(e=>e.checked==false))          
  }  
  const remove =function(e){
    setToDoItems(toDoItems.filter((i)=>i.title!=e.target.previousElementSibling.innerHTML))    
    setConstToDoItems(constToDoItems.filter((i)=>i.title!=e.target.previousElementSibling.innerHTML))
  }
  const toggleFunc=function(e){
    if(e.target.parentNode.parentNode.classList.value=="completed"){
      e.target.parentNode.parentNode.classList.remove("completed")      
      let index=toDoItems.findIndex(i=>i.title==e.target.nextSibling.innerHTML)
      let index2=constToDoItems.findIndex(i=>i.title==e.target.nextSibling.innerHTML)
      let newArray=toDoItems.map((e,i)=>{
        if(i==index){
          return {...e, checked:false}
        }
        return {...e}
      })      
      setToDoItems(newArray)      
      setConstToDoItems(
        constToDoItems.map((e,i)=>{
          if(i==index2){
            return {...e, checked:false}
          }
          return {...e}
        })
      )      
    }
    else{
      e.target.parentNode.parentNode.classList.add("completed")      
      let index=toDoItems.findIndex(i=>i.title==e.target.nextSibling.innerHTML)
      let newArray=toDoItems.map((e,i)=>{
        if(i==index){
          return {...e, checked:true}
        }
        return {...e}
      })      
      setToDoItems(newArray)      
      setConstToDoItems(
        constToDoItems.map((e,i)=>{
          if(i==index){
            return {...e, checked:true}
          }
          return {...e}
        })
      )
    }  
  }
  const postToDoElement=function(e){    
    let postObject=[{title:e.target.children[0].value,checked:false} ]
    setToDoItems([...toDoItems,...postObject])
    setConstToDoItems([...constToDoItems,...postObject])      
  }
  const toggleAll=function(){        
    if(bool){      
      let newToDoItems=toDoItems.map(obj=>{        
          return {...obj, checked:true}
      })
      bool=false      
      setToDoItems(newToDoItems)
      setConstToDoItems(newToDoItems)
      document.getElementById("toggle").style.setProperty("--color","#e6e6e6")
    }      
    else{      
      let newToDoItems=toDoItems.map(obj=>{        
        return {...obj, checked:false}
      })
      bool=true
      setToDoItems(newToDoItems)
      setConstToDoItems(newToDoItems)
      document.getElementById("toggle").style.setProperty("--color","#737373") 
    }    
  }     
  return (
    <div className="App">
      <section className="todoapp">
          <Header postToDoElement={postToDoElement}/>
          <SectionMain
            toDoItems={toDoItems}
            remove={remove}
            toggleFunc={toggleFunc}
            toggleAll={toggleAll}
          />
          <ToDoAppFooter 
            toDoItems={toDoItems}
            postFunction={adBulamadım}
            catchFunction={toDoItems.filter(e=>e.checked==true)}
            rastgeleFonksiyon={rastgeleFonksiyon}
           />     
      </section>
      <FooterInfo />           
  </div>
  );
}

export default App;

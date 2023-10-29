
import './App.css';
import AppHeader from './AppHeader';
import AppBody from "./AppBody"
import {useState} from 'react';
import Context  from './context';
function App() {    
  const [city, setCity]=useState("Ankara")     
  let fonksiyon=(e)=>{
    setCity(e.target.value)
  }  
  return (
    <div className="App">
      <Context.Provider value={{city,fonksiyon}}>
        <AppHeader/>
        <AppBody/>
      </Context.Provider>  
    </div>
  );
}

export default App;

import { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import Context from "./context"
let days=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"]
function AppBody(){
  const value=useContext(Context)
  const [choice, setChoice]=useState(value.city)  
  useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=62ceae6232f44fe7859134114232308&q=${value.city}&days=7&aqi=no&alerts=no`)
      .then(function (response){        
        setChoice(response)
      })
      .catch(function (error) {        
        console.log(error);
      })      
  },[value.city])   
  return (
    <div>      
        <div className='AppBody'> 
        {
          choice!=="Ankara" ?choice.data.forecast.forecastday.map((t,i)=>{
            return <div className='col' key={i}>
              <div className='AppBodyText' >
                {days[new Date(t.date).getDay()]}
              </div>
              <div className='AppBodyPic'>                
                <img alt='enes'  src={t.day.condition.icon}/>
              </div>
              <div className='AppBodyTemperatures'>                
                <p>{Math.ceil(t.day.maxtemp_c)+"°"}</p>
                <p>{Math.ceil(t.day.mintemp_c)+"°"}</p>
              </div>
            </div>
          }) : "Loading"
        }                    
        </div>
    </div>
  )
}

export default AppBody
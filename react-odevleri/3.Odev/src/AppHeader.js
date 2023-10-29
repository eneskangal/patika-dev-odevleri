import { useContext, useState,useEffect } from "react"
import Context from "./context"
function AppHeader(){ 
  const value = useContext(Context)
  const [citys, setCitys] = useState([])
  useEffect(() => {
    async function getCitys() {
      let fetchDAta=await fetch("http://turkiyeapi.cyclic.app/api/v1/provinces?&limit=81")
      let y = await fetchDAta.json()
      setCitys(y.data)  
    }      
    getCitys();
  }, [])  
  return (    
    <div>
        <header className="AppHeader">
          <select onChange={value.fonksiyon}>
            {
              citys.map((e,i)=>{
                return <option defaultValue={e.name}  key={i} selected={value.city===e.name ? true :false}>{e.name}</option>
              })    
            }
          </select>                               
        </header>
    </div>      
  )
}

export default AppHeader
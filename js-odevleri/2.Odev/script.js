function initialize(){   
    if(localStorage.getItem("yapilacaklar")==null){
        let gonderilecek=[]
        localStorage.setItem("yapilacaklar",JSON.stringify(gonderilecek))       
    }
    else{
        let cekilecekDatalar=JSON.parse(localStorage.getItem("yapilacaklar"))
        for(let i=0; i<cekilecekDatalar.length; i++){
            let UL_DOM=document.getElementById("list")
            let li=document.createElement("li")          
            li.onclick=function(){checkedToggle(this)}
            li.classList.add("d-flex","justify-content-between")
            li.innerHTML=`${cekilecekDatalar[i]}<button
            type="button" class="list-kapatma" aria-label="Close" onclick="closeButton(this)">
            <span>&times;</span></button>`
            UL_DOM.appendChild(li)
        }
    }
}
initialize()
function checkedToggle(event){
    if(event.classList.value.indexOf("checked")==-1){
        event.classList.add("checked")
    }
    else{
        event.classList.remove("checked")
    }
}
function newElement(){
    let inputDOM=document.querySelector("input")
    if(Boolean(inputDOM.value)&&inputDOM.value.trim().length>0){        
        document.querySelector("div.success").classList.remove("hide")
        let UL_DOM=document.getElementById("list")
        let li=document.createElement("li")          
        li.onclick=function(){checkedToggle(this)}
        li.classList.add("d-flex","justify-content-between")
        li.innerHTML=`${inputDOM.value.trim()}<button
        type="button" class="list-kapatma" aria-label="Close" onclick="closeButton(this)">
        <span>&times;</span></button>`
        UL_DOM.appendChild(li)        
        let veriCekme=localStorage.getItem("yapilacaklar")      
        veriCekme=JSON.parse(veriCekme)
        veriCekme.push(`${inputDOM.value.trim()}`)
        localStorage.setItem("yapilacaklar",JSON.stringify(veriCekme))            
        setTimeout(function(){
            document.querySelector("div.success").classList.add("hide")
        },4000)
    }
    else{
        document.querySelector("div.error").classList.remove("hide")
        setTimeout(function(){document.querySelector("div.error").classList.add("hide")},4000)
    }    
}
function kapatmaToggle(className){
    if(className==="success"){
        document.querySelector("div.success").classList.add("hide")
    }
    else{
        document.querySelector("div.error").classList.add("hide")
    }     
}
function closeButton(event){
    let cekilecekDatalar=JSON.parse(localStorage.getItem("yapilacaklar")) 
    let index=cekilecekDatalar.findIndex(t=>t==event.parentElement.innerHTML.slice(0,event.parentElement.innerHTML.indexOf("<")))
    cekilecekDatalar.splice(index,1)
    localStorage.setItem("yapilacaklar",JSON.stringify(cekilecekDatalar))   
    event.parentElement.remove()    
}
function odev(){
    let tarihler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let saat=document.querySelector("#saat")
    let myName=document.querySelector("#myName")
    myName.innerHTML=prompt("Adınız nedir?")    
    setInterval(function(){             
        let tarih=new Date()
        saat.innerHTML=`${tarih.getHours()<10?"0"+tarih.getHours():tarih.getHours()}:${tarih.getMinutes()<10 ?"0"+tarih.getMinutes():tarih.getMinutes()}:${tarih.getSeconds()<10 ? "0"+tarih.getSeconds():tarih.getSeconds()} ${tarihler[tarih.getDay()-1]}`  
    },1000)
}
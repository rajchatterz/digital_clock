function getdate(){
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(sec<10){
        sec = "0"+sec
    }
    if(hour<10){
        hour="0"+hour
    }
    if(min<10){
        min="0"+min
    }
    document.getElementById("hour").innerHTML=hour
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=sec
}
setInterval(getdate,100)
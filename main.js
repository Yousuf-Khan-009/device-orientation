function online_offline(){
    var status = document.getElementById("status");

    if(navigator.onLine){
        status.innerHTML = "You are Online";
        status.style.color = "green";
        console.log("Your are Online");
    }else{
        status.innerHTML = "You are Offline";
        status.style.color = "red";
        console.log("Your are Offline");
    }

}

window.addEventListener("online" , online_offline())
window.addEventListener("offline" , online_offline())

window.addEventListener("visibilitychange" , function(){
    if(document.hidden){
        document.title = "😞 come back!"
    }else{
        document.title = "Page visibility Apis"
    }
})

window.addEventListener("deviceorientation", function(e){
    var alpha = e.alpha.toFixed(2)
    var beta = e.beta.toFixed(2)
    var gamma = e.gamma.toFixed(2)

    this.document.getElementById("device-orientation").innerHTML = `Alpha:${alpha} , Beta:${beta} , Gamma:${gamma}`
})
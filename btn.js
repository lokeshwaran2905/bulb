function onAndoff(){
    var btn_status = document.getElementById("button")
    var bulb_status = document.getElementById("bulb")
    if(bulb_status.src.match("OFFbulb")){
        if(btn_status.value.match("POWER OFF")){
        bulb_status.src ="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
        console.log("power on")
        btn_status.value = "POWER ON"
        }
    }
    else{
        bulb_status.src ="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
        console.log("power off")
        btn_status.value = "POWER OFF"
    }
}


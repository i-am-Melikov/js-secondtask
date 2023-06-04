function Change(){
    let inp_value = document.getElementById("groupNum").value;
    let req = inp_value.slice(-3, -2)
    if(req==1){
        alert("Sabah Qrupusunuz");
        document.getElementById("groupName").innerHTML=inp_value
        document.getElementById("groupName").style.color = "yellow"
    }
    else if(req==2){
        alert("Günorta Qrupusunuz");
        document.getElementById("groupName").innerHTML=inp_value
        document.getElementById("groupName").style.color = "red"
    }
    else if(req==3){
        alert("Axşam Qrupusunuz");
        document.getElementById("groupName").innerHTML=inp_value
        document.getElementById("groupName").style.color = "black"
    }
    else{
        alert("Please valid number of your group")
    }
}
// function ModeSelector(){
//     if(document.body.style.backgroundColor === 'black'){
//         document.body.style.backgroundColor = 'white'
//     }
//     else if(document.body.style.backgroundColor === 'white'){
//         document.body.style.backgroundColor = 'black'
//     }
//     else{
//         document.body.style.backgroundColor = 'red'
//     }
// }
function changeBackgroundColor() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
}
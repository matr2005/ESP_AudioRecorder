
let IDs = [12,10];


let container = document.getElementById("container");

function createButton(){
    for(let i = 0; i < IDs.length; i++) {
        let button = document.createElement("button");
        button.textContent = "Lampe " + IDs[i];
        button.addEventListener("click", function (){
            clickButton(button, IDs[i]);
        })
        button.setAttribute("isOn", "false");
        button.classList.add("button-off");

        container.appendChild(button);
    }

    function clickButton(element, id){

        if(element.getAttribute("isOn") === "false" && element.classList.contains("button-off")){
            element.classList.remove("button-off");
            element.classList.add("button-on");
            element.setAttribute("isOn", "true");
        }
        else{
            element.classList.remove("button-on");
            element.classList.add("button-off");
            element.setAttribute("isOn", "false");
        }

        sendData(id);
    }
}
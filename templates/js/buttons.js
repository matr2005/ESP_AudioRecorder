
let IDs = [0,1,2];


let container = document.getElementById("container");

function createButton(){
    for(let i = 0; i < IDs.length; i++) {
        let button = document.createElement("button");
        button.textContent = "Lampe " + IDs[i];
        button.addEventListener("click", function (){
            clickButton(button, IDs[i]);
        })
        button.setAttribute("isOn", "false");

        container.appendChild(button);
    }

    function clickButton(element, id){



        if(element.getAttribute("isOn") === "false"){
            element.style.color = "green";
            element.setAttribute("isOn", "true");
        }
        else{
            element.style.color = "red";
            element.setAttribute("isOn", "false");
        }
    }
}
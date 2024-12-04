const container = document.querySelector(".container");
const bodys = document.querySelector("body");
const resetButton = document.querySelector(".reset");
const clearButton = document.querySelector(".clear");
const colors = document.querySelectorAll(".buttonDesignColors");
const currentColorTxt = document.querySelector(".currentColorTxt");
let paintColor = "black";

colors.forEach(element =>{
    element.addEventListener("click", c => {
        let checkColor = c.target.id;

        switch (checkColor){
            case "black": 
            paintColor = "Black"; 
            break;
            case "blue": 
            paintColor = "Blue"; 
            break;
            case "red": 
            paintColor = "Red"; 
            break;
            case "yellow": 
            paintColor = "Yellow"; 
            break;
            case "purple": 
            paintColor = "Purple"; 
            break;
        }
        currentColorTxt.textContent = paintColor;
        currentColorTxt.setAttribute("style", "color:" + paintColor);
    })
})

function createBoxes(){
    let getUserPrompt = parseInt(prompt("what would be the size of your sketch? 1-100"));
    let resetCount = 0;
    let padding = 0;
    
    if(getUserPrompt<=10){
        padding = 37;
    } else if(getUserPrompt<=20){
        padding = 22;
    }else if (getUserPrompt<=30){
        padding = 14;
    } else if(getUserPrompt<=40){
        padding = 10;
    } else if(getUserPrompt<=50){
        padding = 7;
    } else if(getUserPrompt<=70){
        padding = 4.5;
    } else if(getUserPrompt<=90){
        padding = 3.3;
    } else{
        padding = 2.8;
    }

    if(Number.isInteger(getUserPrompt)==true && getUserPrompt<=100){
        if(resetCount == getUserPrompt){
        } else {
            for(let i = 0;i<getUserPrompt;i++){
                const createMiniContainer = document.createElement("div");
                createMiniContainer.setAttribute("style","display:flex;flex:0 1 auto;")
                for(let j = 0;j<getUserPrompt;j++){
                    const createDiv = document.createElement("div");
                    createDiv.setAttribute("style","max-width:40px;width:2px;border: solid lightgrey 0.2px; background:white;padding:"+ padding +"px;margin:0;");
                    createMiniContainer.appendChild(createDiv);
                    container.appendChild(createMiniContainer);
                    createDiv.addEventListener("mouseover", e =>{
                        createDiv.setAttribute("style","max-width:40px;width:2px;border: solid lightgrey 0.2px; background:"+ paintColor +";padding:"+ padding +"px;margin:0;");})
                    clearButton.addEventListener("click", e =>{
                        createDiv.setAttribute("style","max-width:40px;width:2px;border: solid lightgrey 0.2px; background:white;padding:"+ padding +"px;margin:0;");})
                } 
                j = 0;
                resetButton.addEventListener("click", r => {
                    container.removeChild(createMiniContainer);
                })


            }
        }
    } else {
        alert("Please input a number / in valid range.");
        createBoxes();
    }

}

createBoxes();

resetButton.addEventListener("click", e =>{
    createBoxes();
})
   
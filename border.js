let radius = document.querySelectorAll(".radius")
let preview = document.querySelector(".preview")
let button = document.querySelectorAll("button");
let advanced = document.querySelector(".advanced")
let advsupleft = document.querySelector("#advsupleft")
let advsupright = document.querySelector("#advsupright")
let advinfleft = document.querySelector("#advinfleft")
let advinfright = document.querySelector("#advinfright")

let radiusValues = [0,0,0,0,0,0,0,0]

function borderRadius(){
    preview.style.borderRadius = radiusValues[0] + '% ' + radiusValues[1] + '% ' + radiusValues[2] + '% ' + radiusValues[3] + '% ';
}

function advancedBorderRadius(){
    preview.style.borderRadius = radiusValues[0] + '% ' + radiusValues[1] + '% ' + radiusValues[2] + '% ' + radiusValues[3] + '% ' + '/ ' + radiusValues[4] + '% ' + radiusValues[5] + '% ' + radiusValues[6] + '% ' + radiusValues[7] + '% '
}

radius.forEach((border, index) => {
    border.addEventListener("input", function(){
        radiusValues[index]= border.value;
        if(border.value == '' || border.value == null || border.value < 0 ){
            border.value = ' ';
            radiusValues[index]=0;
        }
        if(border.value > 100){
            border.value = 100;
            radiusValues[index]=100;
        }
        if(advanced.style.display === 'flex'){
            advancedBorderRadius();
        }
        else{
            borderRadius(); 
        }
    })
})

button[0].addEventListener("click", function(){
    if(advanced.style.display === "flex"){
        advanced.style.display = "none";
        button.innerHTML = "Advanced Options";
        borderRadius(); 
        for(let i = 4; i<8; i++){
            radius[i] = '';
            radiusValues[i] = 0; 
        }
    }   
    else{
        advanced.style.display = "flex";
        button[0].innerHTML = "Normal Options";
        advancedBorderRadius();
    }
})

function allZeros(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]!=0){
            return false
        }
    }
    return true
}

button[1].addEventListener("click", function(){
    let copyText = preview.style.borderRadius;
    if(allZeros(radiusValues)){
        navigator.clipboard.writeText('border-radius: 0%');
    }
    else{
        navigator.clipboard.writeText('border-radius: ' + copyText);
    }
})
let error = document.querySelector(".error");
let bin = document.querySelector("#bin");
let convert = document.querySelector(".convert");
let result = document.querySelector("h3");
let res = document.querySelector(".result");
var pass;
var dec;
var i;

function verify(){
    if(bin.value.length>8 && bin.value.length==0){
        error.style.display = "block"
        error.innerHTML = "Insert a 8 or less digits binary number";
        pass=0;
    }
    else if(/[^01]/.test(bin.value)){
        error.style.display = "block"
        error.innerHTML = "Insert only 0's and 1's"
        pass=0;
    }
    else{
        error.style.display = "none"
        pass=1;
    }
    return pass;
}

function bin2dec(num){
    console.log(num);
    i=0;
    dec=0;
    while(num>0){
        console.log((num%10)*(2**i));
        dec = dec + ((num%10)*(2**i));
        num = Math.round(num/10);
        console.log(dec);
        i++;
    }
    result.style.display = "block"
    res.style.display = "block"
    res.innerHTML= dec;
    return dec
}

convert.addEventListener("click", function(){
    if(verify()==1){
    bin2dec(bin.value)
    }
})
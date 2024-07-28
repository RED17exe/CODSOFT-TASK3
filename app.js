const numberdisplay = document.querySelector('.numberdisplay');
const btn =document.querySelectorAll('.btn');

let string ="";
let arr = Array.from(btn);
arr.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
       if(e.target.innerHTML == "="){
        string = eval(string);
        numberdisplay.innerHTML = string;
       }
       else if(e.target.innerHTML == "C"){
           string = "";
           numberdisplay.innerHTML = string;
       }
       else if(e.target.innerHTML == "del"){
           string = string.slice(0,-1);
           numberdisplay.innerHTML = string;
       }
       
         else{
          string += e.target.innerHTML;
          numberdisplay.innerHTML = string;
         }


})});
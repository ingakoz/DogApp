function ageCalc(event){
    event.preventDefault();
    let ageInput= document.querySelector("#firsty").value;
    
    
    let result=document.querySelector("#form2");
    result=Math.round ((ageInput/3.107)*16 +31);

    let val = document.querySelector('#sizes').value;

if(val==='small') {
    alert(`🐶 Your dog's age is ${result+5} in human age 👈 Learn more on how to keep your dog healthy and happy on www.dogtime.com 💙`);
 } 
 if(val==='medium') {
    alert(`🐶 Your dog's age is ${result} in human age 👈 Learn more on how to keep your dog healthy and happy on www.dogtime.com 💙` );
 } 
 if(val==='large') {
    alert(`🐶 Your dog's age is ${result-5} in human age 👈 Learn more on how to keep your dog healthy and happy on www.dogtime.com 💙`);
 } 

}

let final= document.querySelector("#form2");
final.addEventListener("click", ageCalc);


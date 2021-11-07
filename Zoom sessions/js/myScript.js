var first=document.querySelector("#first")
var second=document.querySelector("#second")
var total=document.querySelector("#total")


function add(){
    total.innerText=Number(first.value)+Number(second.value)
  
}
function sub(){
    total.innerText=Number(first.value)-Number(second.value)
  
}
function mult(){
    total.innerText=Number(first.value)*Number(second.value)
  
}
function div(){
    total.innerText=Number(first.value)/Number(second.value)
  
}

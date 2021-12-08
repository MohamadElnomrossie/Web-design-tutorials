//put a function in a variable
// var x=function(){
//     console.log("dsdfgfd")
// }
// x();
// arrow function
// var x=(name)=>{

// }
// console.log(x("Mark"))
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json()) // first step resolved(succeeded)
  .then(json => {
json.map(entry=>createCard(entry))
})
  function createCard(json){
    var card=document.createElement('div');
    card.classList.add("card")
    card.classList.add("m-2")
    card.style.width="18rem"
    var color=json.completed?"bg-success":"bg-danger"
    card.classList.add(color)
  //   ===============================================================
    var cardBody=document.createElement("div")
    cardBody.classList.add("card-body")
  //   ==================================================================
    var title=document.createElement("h5")
    title.classList.add('card-title')
    title.textContent=json.title
  //   =================================
    var subTitle=document.createElement("h6")
    subTitle.classList.add('card-subtitle')
    subTitle.classList.add('mb-2')
    subTitle.textContent="Status"
  //   =========================================================================
    var status=document.createElement("h6")
    status.classList.add('card-subtitle')
    status.classList.add('mb-2')
    status.textContent=json.completed?"Completed":"In progress" //ternary operator condition? if true:if false
  //   
  cardBody.appendChild(title)
  cardBody.appendChild(subTitle)
  cardBody.appendChild(status)
  card.appendChild(cardBody)
  main.appendChild(card)
  }
//   object
// {name:mohamad, age:33,id:54548}

// array:
// []

var main=document.querySelector(".main");
//  hoisting

// <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Status</h6>
//           <h6 class="card-subtitle mb-2 text-muted">Completed|not completed</h6>
//         </div>
//       </div>


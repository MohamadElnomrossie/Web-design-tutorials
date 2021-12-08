function login(){
    var body=document.querySelector(".body")
    var data={
        1:{name:"Mark",age:15,image:'ds'},
        2:{name:"Ali",age:32,image:'ds'},
        3:{name:"Mohamad",age:20,image:'ds'},
        4:{name:"Karim",age:14,image:'ds'},
        5:{name:"Jack",age:44,image:'ds'}
    }
    for(var x of Object.keys(data)){
        console.log(data[Number(x)]['name'])
        let label=document.createElement('span');
        label.innerHTML=data[Number(x)]['name']
        let br=document.createElement('br')
        let label2=document.createElement('span');
        let br2=document.createElement('br')
        label2.textContent=data[Number(x)]['age']
        body.appendChild(br)
        body.appendChild(label)
        body.appendChild(br2)
        body.appendChild(label2)
   
    }

}
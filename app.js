const addItemInput = document.querySelector('input.addItemInput');
const listDiv=document.querySelector('.list');
const addItemInputQuantity = document.querySelector('input.addItemInputQuantity')
const addItemButton = document.querySelector('button.addItemButton');
const listUl=listDiv.querySelector('ul');


function attachListItemsButtons(li){
    let up = document.createElement('button');
     up.className="up";
     up.textContent="up";
    li.appendChild(up);
    let down = document.createElement('button');
    down.className="down";
     down.textContent="down";
    li.appendChild(down);
    let remove = document.createElement('button');
     remove.className="remove";
     remove.textContent="remove";
    li.appendChild(remove);
  }
  listUl.addEventListener('click', (e) =>{
    if(e.target.tagName=='BUTTON'){
      if(e.target.className== "remove"){
    let li=e.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li)
    }
    if(e.target.className== "up"){
      let li=e.target.parentNode;
      let prevLi=li.previousElementSibling;
      let ul = li.parentNode;
      if(prevLi){
      ul.insertBefore(li, prevLi);
      }
    }
       if(e.target.className== "down"){
      let li=e.target.parentNode;
      let nextLi=li.nextElementSibling;
      let ul = li.parentNode;
      if(nextLi){
      ul.insertBefore(nextLi, li);
      }
    }
    }
    });

addItemButton.addEventListener('click', ()=>{
    let ul=document.getElementsByTagName('ul')[0];
    let li= document.createElement('li');
    li.textContent=addItemInputQuantity.value + " " + addItemInput.value;
    attachListItemsButtons(li);
    ul.appendChild(li);
   
    addItemInput.value=""
})
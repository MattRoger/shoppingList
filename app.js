console.log("working")

const addItemInput = document.querySelector('input.addItemInput')
const addItemInputQuantity = document.querySelector('input.addItemInputQuantity')
const addItemButton = document.querySelector('button.addItemButton');


addItemButton.addEventListener('click', ()=>{
    let ul=document.getElementsByTagName('ul')[0];
    let li= document.createElement('li');
    li.textContent=addItemInputQuantity.value +" " + addItemInput.value
    ul.appendChild(li)
})
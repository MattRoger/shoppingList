const red="#EF8089"
const redHighlight="#E63946";
const blue= " #8EB5CD"
const blueHighlight="#4B86AA";
const yellow="#FEF5AE"
const yellowHighlight="#FDE74C";

const addItemInput = document.querySelector("input.addItemInput");
const listDiv = document.querySelector(".list");
let addItemInputQuantity = document.querySelector(
  "input.addItemInputQuantity"
);
const addItemButton = document.querySelector("button.addItemButton");
const listUl = listDiv.querySelector("ul");
const list = listUl.children;


function attachListItemsButtons(li) {
  let checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.type="checkbox";
  li.appendChild(checkbox);
  let label= document.createElement("label");
  label.textContent="Need to Purchase";
  li.appendChild(label)
  let up = document.createElement("button");
  up.className = "up";
  up.textContent = "up";
  up.style.backgroundColor=blue;
  li.appendChild(up);
  let down = document.createElement("button");
  down.className = "down";
  down.textContent = "down";
  down.style.backgroundColor=yellow;
  li.appendChild(down);
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "remove";
  remove.style.backgroundColor=red;
  li.appendChild(remove);
};

listUl.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.className == "remove") {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (e.target.className == "up") {
      let li = e.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (e.target.className == "down") {
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

listUl.addEventListener("mouseover", (e) => {
    if (e.target.tagName == "BUTTON") {
      if (e.target.className == "remove") {
       e.target.style.backgroundColor=redHighlight;
      }
      if (e.target.className == "up") {
        e.target.style.backgroundColor=blueHighlight;
      }
      if (e.target.className == "down") {
        e.target.style.backgroundColor=yellowHighlight;
      }
    }
  });
listUl.addEventListener("mouseout", (e) => {
    if (e.target.tagName == "BUTTON") {
      if (e.target.className == "remove") {
       e.target.style.backgroundColor=red;
      }
      if (e.target.className == "up") {
        e.target.style.backgroundColor=blue;
      }
      if (e.target.className == "down") {
        e.target.style.backgroundColor=yellow;
      }
    }
  });



addItemButton.addEventListener("click", () => {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.style.display="inline";
  p.textContent = addItemInputQuantity.value + "x" + " " + addItemInput.value;
  li.appendChild(p);
  attachListItemsButtons(li);
  ul.appendChild(li);
  li.style.border="1px solid black";
  li.style.padding=".5rem";
  addItemInput.value = "";
  addItemInputQuantity.value=1;
});

listUl.onchange=function(){
    let checkbox= document.getElementsByClassName("checkbox");
    for(let i=0; i<checkbox.length; i++){
        let li =checkbox[i].previousElementSibling
        let label =checkbox[i].nextElementSibling
        if(checkbox[i].checked==true){
            li.style.opacity=".5";
            label.textContent="Purchased"
        }else{
            li.style.opacity=1;
            label.textContent="Need to Purchase"
        }
        console.log(checkbox[i].checked)

    }
    
   
}
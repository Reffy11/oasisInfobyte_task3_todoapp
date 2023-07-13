
let inputField = document.getElementById("inputField");
let addListbtn = document.getElementById("addList");
let taskContainer = document.getElementById("taskContainer");



addListbtn.addEventListener('click',function(){
    var paragraph =document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
   
    taskContainer.appendChild(paragraph);
inputField.value="";

paragraph.addEventListener('click',function(){
paragraph.style.textDecoration = 'line-through';
paragraph.innerText = ' task completed';

})
paragraph.addEventListener('dblclick',function(){
    taskContainer.removeChild(paragraph);
})

})
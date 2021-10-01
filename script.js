/*when i click on add button 
1.it will create empty div then        [newtodoitem]
2.create the li elemment in that div   [todoname]
3create the delete button in that div  [deletebtn]
4.this whole div should present in parent div i.e To do list div
5.everytime we have to add new div
*/

function addtolist(){
    //accessing the value from input box
    var taskname=document.getElementById("taskname").value;
    console.log(taskname);
    //created the empty div to add all elements -to do list parent element
    var tododiv=document.getElementById("mytodo");

    //created the empty div--to do list child element
    var newtodoitem=document.createElement("div");

    //created the li element
    var todoname=document.createElement("li");
    todoname.innerText=taskname;

    //created the delete icon 
    var deletebtn=document.createElement("i");
    deletebtn.classList.add("fas");
    deletebtn.classList.add("fa-trash-alt");

    //adding the li elment and delete icon to empty div i.e [newtodoitem]
    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(deletebtn);

    tododiv.appendChild(newtodoitem);
}

//delete operation

var tododiv=document.getElementById("mytodo");
tododiv.addEventListener("click",deleteitem); //when you click on anywhere it should execute one function i.e deletefunction

function deleteitem(e){     //e-event-the place where we are clicking
    const element=e.target
    //if we are clicking on the delete icon we need remove its parent element
     if(element.classList[0]){   //classlist[0] means first class of the element it gives the value as fas
        element.parentElement.remove()  //[newtodoitem] got deleted
     }   
}

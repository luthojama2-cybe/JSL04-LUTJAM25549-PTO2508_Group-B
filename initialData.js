const initialTasks = [
{
id:1,
title:"Launch Epic Career 🚀",
description:"Create a killer Resume",
status:"todo"
},

{
id:2,
title:"Master JavaScript 💛",
description:"Get comfortable with the fundamentals",
status:"doing"
},

{
id:3,
title:"Contribute to Open Source",
description:"Gain practical experience",
status:"done"
}
];

// Stores the task that is currently edited

let currentTaskId = null;

function renderTasks(){

document.getElementById("todo-column").innerHTML="";
document.getElementById("doing-column").innerHTML="";
document.getElementById("done-column").innerHTML="";

//Loop through every task in the array
initialTasks.forEach(task=>{
//Task listner response
const taskDiv=document.createElement("div");

taskDiv.classList.add("task-div");
taskDiv.textContent=task.title;

//When a task is clicked open modal
taskDiv.addEventListener("click",()=>{
openModal(task.id);
});
// Place the task in the correct column based on status
if(task.status==="todo"){
document.getElementById("todo-column").appendChild(taskDiv);
}

if(task.status==="doing"){
document.getElementById("doing-column").appendChild(taskDiv);
}

if(task.status==="done"){
document.getElementById("done-column").appendChild(taskDiv);
}

});

}

//Open Modal
function openModal(taskId){

//Find task from array
const task=initialTasks.find(t=>t.id===taskId);
//Save task ID 
currentTaskId=taskId;

// Populate modal inputs with current task data
document.getElementById("modal-title").value=task.title;
document.getElementById("modal-description").value=task.description;
document.getElementById("modal-status").value=task.status;

//Show the modal
document.getElementById("task-modal").classList.remove("hidden");

}


//Close modal
document.getElementById("close-modal").addEventListener("click",()=>{

document.getElementById("task-modal").classList.add("hidden");

});

//Save Changes in modal
document.getElementById("save-task").addEventListener("click",()=>{

const task=initialTasks.find(t=>t.id===currentTaskId);

//Update modal inputs
task.title=document.getElementById("modal-title").value;
task.description=document.getElementById("modal-description").value;
task.status=document.getElementById("modal-status").value;

renderTasks();

document.getElementById("task-modal").classList.add("hidden");

});

renderTasks();
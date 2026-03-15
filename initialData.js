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

let currentTaskId = null;

function renderTasks(){

document.getElementById("todo-column").innerHTML="";
document.getElementById("doing-column").innerHTML="";
document.getElementById("done-column").innerHTML="";

initialTasks.forEach(task=>{

const taskDiv=document.createElement("div");

taskDiv.classList.add("task-div");
taskDiv.textContent=task.title;

taskDiv.addEventListener("click",()=>{
openModal(task.id);
});

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

function openModal(taskId){

const task=initialTasks.find(t=>t.id===taskId);

currentTaskId=taskId;

document.getElementById("modal-title").value=task.title;
document.getElementById("modal-description").value=task.description;
document.getElementById("modal-status").value=task.status;

document.getElementById("task-modal").classList.remove("hidden");

}

document.getElementById("close-modal").addEventListener("click",()=>{

document.getElementById("task-modal").classList.add("hidden");

});

document.getElementById("save-task").addEventListener("click",()=>{

const task=initialTasks.find(t=>t.id===currentTaskId);

task.title=document.getElementById("modal-title").value;
task.description=document.getElementById("modal-description").value;
task.status=document.getElementById("modal-status").value;

renderTasks();

document.getElementById("task-modal").classList.add("hidden");

});

renderTasks();
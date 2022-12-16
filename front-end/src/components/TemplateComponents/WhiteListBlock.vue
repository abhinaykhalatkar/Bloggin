<template>

<div  class="container">
<form @submit="submit" class="form">
            <label for="email">Enter your email:</label>
            <input type="email" class="input" />
            <input type="submit" class="add" value="Add User" />
        </form>
        <div class="tasks"></div>
        <div class="delete-all">Delete all</div>
        </div>
</template>
<script>


export default {
  name: "WhiteListBlock",
  methods:{
    submit(e){
        e.preventDefault()
    },
    slide(el,val, start=null) {
      gsap.fromTo(
        el,
        { css: { width:`${val?0:'676px'}`} },
        { css: { width:`${val?'676px':0}`, display:`${val?'block':'none'}`}, onComplete: start, duration: 0.2 }
      );
    },
  },
  mounted(){
let inputEle = document.querySelector(".input");
let submitEle = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks")
let containerDiv = document.querySelector(".container")
let deleteAll = document.querySelector(".delete-all");
let arrayOfTasks =[];
// console.log(inputEle)

if(window.localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(window.localStorage.getItem("tasks"))
}
getTaskFromLocalStorage();

submitEle.onclick = function() {
    if(inputEle.value !== "") {
        addTaskToArray(inputEle.value);
        inputEle.value ="";
    }
}

function addTaskToArray (taskText) {
    const task = {
        id : Date.now(),
        title : taskText,
        complated : false,
    };
    arrayOfTasks.push(task);
    // console.log(arrayOfTasks);
    addTaskToPage(arrayOfTasks);

    addTaskToLocalStorage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
    tasksDiv.innerHTML = "";

    arrayOfTasks.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if(task.complated){
            div.className = "task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"))
        div.appendChild(span);
        tasksDiv.appendChild(div)
        // console.log(div)
    });
}


function addTaskToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}
function getTaskFromLocalStorage(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let tasks = JSON.parse(data);
        // console.log(tasks)
        addTaskToPage(tasks);
    }
}

function addElementsToPageFrom(arrayOfTasks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
      // Create Main Div
        let div = document.createElement("div");
        div.className = "task";
        // Check If Task is Done
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append Button To Main Div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksDiv.appendChild(div);
    });
}

// Click On Task Element
tasksDiv.onclick = ((e) => {
    if (e.target.classList.contains("del")) {
        // e.target.parentElement.remove();
        e.target.parentElement.remove();
        deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    }
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
        updateStatusInLocalStorage(e.target.getAttribute("data-id"));
    }
})


function deleteTaskFromLocalStorage(taskId) {
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addTaskToLocalStorage(arrayOfTasks);
}
function updateStatusInLocalStorage(taskId) {
    arrayOfTasks.forEach((task) =>{
        if(task.id == taskId)
            task.complated == false ? task.complated = true:task.complated = false;
    });

    addTaskToLocalStorage(arrayOfTasks);
}

deleteAll.onclick = function(e){
    tasksDiv.innerHTML = "";
    window.localStorage.removeItem("tasks")
}




  }
  }
</script>
<style>

.container {
            width: 500px;
            margin: 20px auto;
        }
        .form {
            background-color: #eee;
            border-radius: 6px;
            padding: 20px;
            display: flex;
            align-items: center;
        }
        .input {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            flex: 1;
        }
        .input:focus , .add:focus{
            outline: none;
        }
        .add {
            border: none;
            background-color: #f44336;
            color: white;
            padding: 10px;
            border-radius: 6px;
            margin-left: 10px;
            cursor: pointer;
        }
        .tasks {
            background-color: #eee;
            margin-top: 20px;
            border-radius: 6px;
            padding: 20px;
            overflow-y: scroll;
            height: 24vh;
        }
        .tasks .task {
            background-color: white;
            padding: 10px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 0.3s;
            cursor: pointer;
            border: 1px solid #ccc;
        }
        .tasks .task:not(:last-child) {
            margin-bottom: 15px;
        }
        .tasks .task:hover {
            background-color: #f7f7f7;
        }
        .tasks .task.done {
            opacity: 0.5;
            position: relative;
        }
        .task.done::after {
            position: absolute;
            content: "";
        }
        .tasks .task span { 
            font-weight: bold;
            font-size: 10px;
            background-color: red;
            color: white;
            padding: 2px 6px;
            border-radius: 4px;
            cursor: pointer;
        }
        .delete-all {
            width: calc(100% - 25px);
            margin: auto;
            padding: 12px;
            text-align: center;
            font-size: 14px;
            color: white;
            background-color: #f44336;
            margin-top: 20px;
            cursor: pointer;
            border-radius: 4px;
        }
</style>
<template>

    <div class="container23">
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
    data() {
        return {
            whiteList: []
        }
    },
    methods: {
        addUsers(arrayOfUsers) {
            let newUsersArray=arrayOfUsers.length>0?arrayOfUsers.map(el=>el.title):[];
            
            this.whiteList = [...newUsersArray];
    
        }
        ,

        submit(e) {
            e.preventDefault()
        },
        slide(el, val, start = null) {
            gsap.fromTo(
                el,
                { css: { width: `${val ? 0 : '676px'}` } },
                { css: { width: `${val ? '676px' : 0}`, display: `${val ? 'block' : 'none'}` }, onComplete: start, duration: 0.2 }
            );
        },
    },
    emits: ['update-whiteList'],
    mounted() {
        let inputEle = document.querySelector(".input");
        let submitEle = document.querySelector(".add");
        let tasksDiv = document.querySelector(".tasks")
        let containerDiv = document.querySelector(".container23")
        let deleteAll = document.querySelector(".delete-all");
        let arrayOfTasks = [];


        containerDiv.addEventListener('click', () => {
            this.addUsers(arrayOfTasks)
            this.$emit('update-whiteList', this.whiteList)
        })
        // console.log(inputEle)

       
       

        submitEle.onclick = function () {
            if (inputEle.value !== "") {
                addTaskToArray(inputEle.value);
                inputEle.value = "";
            }
        }

        function addTaskToArray(taskText) {
            const task = {
                id: Date.now(),
                title: taskText,
                complated: false,
            };
            arrayOfTasks.push(task);
            // console.log(arrayOfTasks);
            addTaskToPage(arrayOfTasks);

            
        }

        function addTaskToPage(arrayOfTasks) {
            tasksDiv.innerHTML = "";

            arrayOfTasks.forEach((task) => {
                let div = document.createElement("div");
                div.className = "task";
                if (task.complated) {
                    div.className = "task done";
                }
                div.setAttribute("data-id", task.id);
                div.appendChild(document.createTextNode(task.title));
                let span = document.createElement("span");
                span.className = "del";
                span.appendChild(document.createTextNode("Delete"))
                div.appendChild(span);
                tasksDiv.appendChild(div)
                // console.log(div)
            });
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
        })


        function deleteTaskFromLocalStorage(taskId) {
            arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
        }

        deleteAll.onclick = function (e) {
            tasksDiv.innerHTML = "";
            arrayOfTasks=[];
        }




    }
}
</script>
<style scoped>
.container23 {
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
    width: 500px;
    margin:  auto;
    padding-bottom: 15px;
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

.input:focus,
.add:focus {
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
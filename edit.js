const taskId = new URLSearchParams(window.location.search).get("task")

const taskForm = document.getElementById("edit-task-form");
const taskInputTitle = document.getElementById("task-title");
const goBackButton = document.getElementById("go-back-btn");

const API_URL = "https://6836ef67664e72d28e42c3a4.mockapi.io/tasks";

fetch(`${API_URL}/${taskId}`)
.then(res =>res.json())
.then((task) => {
    taskInputTitle.value = task.title;
})
.catch(()=>alert("something went wrong."));

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const updatedTaskTitle = taskInputTitle.value;
    if(updatedTaskTitle){
        fetch(`${API_URL}/${taskId}`,{
            method:"PUT",
            body:JSON.stringify({title:updatedTaskTitle,completed:false}),
            headers:{"Content-type":"application/json"}
        }).then((res)=>res.json()).then(()=>{
            alert("Task updated successfully");
            window.location.href = "index.html"

        }).catch(()=>alert("something went wrong"));
    }else{
        alert("no task found")
    }
})

goBackButton.addEventListener("click",()=>{
    window.history.back();
})
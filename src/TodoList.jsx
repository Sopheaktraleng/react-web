import { useState } from "react";
function TodoList(){
    const [ tasks, setTasks] = useState(["Do homework", "Shower" ,"Swimming"]);
    const [ newTask, setNewTask] = useState("");
    function handleEventChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
            
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input className="text-area" type="text" placeholder="Enter a Task...." value={newTask} onChange={handleEventChange}/>
            <button onClick={addTask} className="add-btn">Add</button>
            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="move-up-btn" onClick={()=>moveTaskUp(index)}>Up</button>
                        <button className="move-down-btn" onClick={()=>moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default TodoList
import React from "react";
import { useState } from "react";
import Task from "./Task.jsx";

const ToDoList= () => {
    
        const [newTask, setNewTask] = useState("");

        const [taskList, setTaskList] = useState([]);

    return (
        <div>

            <input type="text" value={newTask}  placeholder="What do you want to do next?"
				onChange={(event) => setNewTask(event.target.value)}
                
				onKeyUp={(event) => {

					if(event.key == "Enter"){
                        setTaskList([newTask,...taskList]);
                        setNewTask("");
					}
				}}
			/>
              
              {(taskList.length == 0) && <div>No tasks, add a task</div>}
              {taskList.map((tarea, indice)=> <Task task={tarea}  key={indice} onRemove={()=>{
                setTaskList(taskList
                    .filter((_tarea, indiceABorrar)=>{
                        indice != indiceABorrar
                }))
              }}/> )}
              <p>{taskList.length} items left</p>

        </div>
    )
}

export default ToDoList;
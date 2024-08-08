import React from "react";
import { useState } from "react";
import Task from "./Task.jsx";

const ToDoList= () => {
    
        const [newTask, setNewTask] = useState("");

        const [taskList, setTaskList] = useState([]);

    return (
        <div>


            {/* Barra para agregar tarea */}
            <div class="input-group mt-5 p-4 centered-container">
            <input type="text" className="form-control"  value={newTask}  placeholder="What do you want to do next?"
				onChange={(event) => setNewTask(event.target.value)}
                
				onKeyUp={(event) => {

					if(event.key == "Enter"){
                        setTaskList([newTask,...taskList]);
                        setNewTask("");
					}
				}}
			/>
              
                </div>

               {/* Alerta de tareas sin agregar */}
              {(taskList.length == 0) && <div class="text-center p-3 mb-4 fs-5">No tasks, add a task</div>}

              {/* Borrar tarea */}
              {taskList.map((tarea, indice)=> <Task task={tarea}  key={indice} onRemove={()=>{
                setTaskList(taskList
                    .filter((_tarea, indiceABorrar)=>{
                        return indice != indiceABorrar
                }))
              }}/> )}

               {/* pie de página */}
              <div class="card text-center"></div>
              <div class="text-muted">{taskList.length} items left</div>
            
        </div>
    )
}

export default ToDoList;
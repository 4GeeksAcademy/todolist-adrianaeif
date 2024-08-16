import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task.jsx";

const ToDoList= () => {
    
        const [newTask, setNewTask] = useState("");

        const [taskList, setTaskList] = useState([]);

        const loadTask = async() => {
            const urlApi = 'https://playground.4geeks.com/todo/users/adrianaeif'
            const response = await fetch(urlApi);
            const data = await response.json();
            setTaskList(data.todos)
        }

        const createTask = async () =>{
            const response = await fetch ('https://playground.4geeks.com/todo/todos/adrianaeif', {
                method: 'POST',
                body: JSON.stringify({
                    label: newTask,
                    is_done: false
                }),
                headers:{
                    "content-Type": "application/json"
                }
            });
            const data = await response.JSON();

        }
    
        const deleteTask = async (newTask) =>{
            const id = newTask.id;
            const response = await fetch ('https://playground.4geeks.com/todo/todos/${id}', {
                method: 'DELETE',
               });
               const data = await response.JSON();
            }

        

        useEffect( () => {
            loadTask();
        },[]);

        return (
        <div>


            {/* Barra para agregar tarea */}
            <div class="input-group mt-5 p-4 centered-container">
            <input type="text" className="form-control"  value={newTask}  placeholder="What do you want to do next?"
				onChange={(event) => setNewTask(event.target.value)}
                
				onKeyUp={(event) => {

					if(event.key == "Enter"){
                        createTask();
                        setTaskList([newTask,...taskList]);
                        setNewTask("");
					}
                    
				}}
			/>
              
                </div>

               {/* Alerta de tareas sin agregar */}
              {(taskList.length == 0) && <div class="text-center p-3 mb-4 fs-5">No tasks, add a task</div>}

              {/* Borrar tarea REVISAR */}
              {taskList.map((tarea, indice)=> 
              <Task task={tarea}  key={indice} onRemove={()=>{
                setTaskList(taskList
                    .filter((_tarea, indiceABorrar)=>{
                        return indice != indiceABorrar
                }))
              }}/> )}

               {/* pie de página */}
              <div class="card text-center"></div>
              <div class="text-muted">{taskList.length} items left</div>

              {/* Eliminar todas las tareas REVISAR*/}
            <div>
                <button className="btn btn-danger m-5">
                    Eliminar todas las tareas
                </button>
            </div>
        </div>
    )
}

export default ToDoList;
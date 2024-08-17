import React from "react";
import { useState, useEffect } from "react";
import Task from "./Task.jsx";

const ToDoList= () => {
    
        const [newTask, setNewTask] = useState("");

        const [taskList, setTaskList] = useState([]);

        // cargar tarea
        const loadTask = async() => {
            try {
                const urlApi = 'https://playground.4geeks.com/todo/users/adrianaeif'
                const response = await fetch(urlApi);
                const data = await response.json();
                setTaskList(data.todos)

            } catch (error) {
                console.log(error)
            }
        }

        //crear usuario

        const createUser = async () => {
            const response = await fetch ('https://playground.4geeks.com/todo/users/adrianaeif', {
                method: 'POST',
            })
        }


        // crear tarea
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
        
        // borrar una tarea
        const deleteTask = async (todoId, indice) =>{
            const id = newTask.id;
            const response = await fetch ('https://playground.4geeks.com/todo/todos/' + todoId, {
                method: 'DELETE',
            });
            if(response.ok){
                setTaskList(taskList
                    .filter((_tarea, indiceABorrar)=>{
                        return indice != indiceABorrar
                }))

            }
            }


            // Eliminar todas las tareas
            const deleteAll = async () => {
                try {
                    const response = await fetch("https://playground.4geeks.com/todo/users/adrianaeif", {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        setTaskList([])} 
                        await createUser(); // crea nuevamente el usuario luego de ser borrado
                    } catch (error) {
                      console.error('Error clearing tasks:', error);
                    }
                  };
                
            

        

        useEffect( () => {
            createUser();
            loadTask();
        },[]);


        return (
        <div>


            {/* Barra para agregar tarea */}
            <div className="input-group mt-5 p-4 centered-container">
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
              {(taskList.length == 0) && <div className="text-center p-3 mb-4 fs-5">No tasks, add a task</div>}

              {/* Borrar tarea */}
              {taskList.map((tarea, indice)=> 
              <Task task={tarea}  key={indice} onRemove={()=>{
                deleteTask(tarea.id, indice);
              }}/> )}

               {/* pie de página */}
              <div className="card text-center"></div>
              <div className="text-muted">{taskList.length} items left</div>

              {/* Eliminar todas las tareas REVISAR*/}
            <div>
                <button className="btn btn-danger m-5" onClick={() => {deleteAll();}}>
                    Eliminar todas las tareas
                </button>
            </div>
        </div>
    )
}

export default ToDoList;
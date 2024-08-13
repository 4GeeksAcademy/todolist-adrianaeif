import React from "react";
import { useState } from "react";

const Task = (props) => {

    const [isHovered, setIsHovered] = useState (false)

    return (

        <div class="card mx-5 m-2 p-1">
        <div class="card-body text-center">
          <blockquote class="blockquote mb-0">
          <div className="d-flex justify-content-between" 
        
        onMouseEnter={()=> {
            setIsHovered(true);

        }}
        onMouseLeave={()=>{
            setIsHovered(false);
        }}>
            {props.task.label}

            {(isHovered) &&   <span onClick={() => {
                props.onRemove()
            }} class="fa-solid fa-xmark"></span>}
          

        </div>
          </blockquote>
        </div>
      </div>
    )
        
}

export default Task;

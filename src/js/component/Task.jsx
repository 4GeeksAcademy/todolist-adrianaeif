import React from "react";
import { useState } from "react";

const Task = (props) => {

    const [isHovered, setIsHovered] = useState (false)

    return (

        <div className="card mx-5 m-2 p-1">
        <div className="card-body text-center">
          <blockquote className="blockquote mb-0">
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
            }} className="fa-solid fa-xmark"></span>}
          

        </div>
          </blockquote>
        </div>
      </div>
    )
        
}

export default Task;

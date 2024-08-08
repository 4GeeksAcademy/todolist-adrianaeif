import React from "react";
import { useState } from "react";

const Task = (props) => {

    const [isHovered, setIsHovered] = useState (false)

    return (
        <div className="d-flex justify-content-between" 
        
        onMouseEnter={()=> {
            setIsHovered(true);

        }}
        onMouseLeave={()=>{
            setIsHovered(false);
        }}
        >
            <p>{props.task}</p>
            {(isHovered) &&   <span onClick={() => {
                props.onRemove()

            }}>x(icono)</span>}
          

        </div>
    )
}

export default Task;

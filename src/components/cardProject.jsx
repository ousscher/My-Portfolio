import React from "react";

const BigProjectCard = ({project})=>{
    return (
        <div className="h-[] w-[30%] text-center  border-2">
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
            <p>{project.details}</p>
        </div>
    );
}

export default BigProjectCard;
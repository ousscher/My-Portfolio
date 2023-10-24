import React from "react";

const SmallPRojectCard = ({project})=>{
    return (
        <div className=" w-[25%] text-center  border-2">
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
            <p>{project.details}</p>
        </div>
    );
}

export default SmallPRojectCard;
import React from "react";
import ProjectCard from "./ProjectCard";

export default function App(){

const projects = [

{
title:"Chat Application",
description:"Realtime chat app using Socket.io"
},

{
title:"Task Manager",
description:"Fullstack task manager with authentication"
},

{
title:"Finance Tracker",
description:"Track income and expenses"
}

]

return(

<div className="projects-container">

{projects.map((project,index)=>(
<ProjectCard key={index} {...project}/>
))}

</div>

)

}
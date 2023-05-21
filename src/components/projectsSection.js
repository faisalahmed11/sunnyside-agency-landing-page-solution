import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectsSection.module.css";
const Card=({src,text})=><div className={`${styles.card}`}><span>{text}</span> <Image className={`${styles.image}`} src={src} alt="" width={300} height={300}/></div>

function ProjectsSection() {
  return (
    <section id="projectSection" className={`${styles.projectsSection}`}>
     <h1>Projects</h1>
    <div>
     <Card src="/house5.jpg" text={"Summer House"}/>
     <Card src="/house2.jpg" text={"Brick House"}/>
     <Card src="/house3.jpg" text={"Renovated"}/>
     <Card src="/house4.jpg" text={"Barn House"}/>
     <Card src="/house5.jpg" text={"Summer House"}/>
     <Card src="/house2.jpg" text={"Brick House"}/>
     <Card src="/house3.jpg" text={"Renovated"}/>
     <Card src="/house4.jpg" text={"Barn House"}/>
    </div>
    </section>
  );
}

export default ProjectsSection;

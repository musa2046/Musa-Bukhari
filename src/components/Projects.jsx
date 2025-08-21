import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import projectsArr from "../projectsArr.js"

export default function Projects() {
    return (
        <section className="projects container ">
                <SectionHeading heading = "Projects"/>
            <div className=" row row-cols-1 row-cols-md-2 justify-content-center gap-5 py-4">
                 
                 <ProjectCard heading="project" description="project discription" imgURL = "src\assets\CV pic.jpg" />
                 <ProjectCard heading="project" description="project discription" imgURL = "src\assets\CV pic.jpg" />
            </div>
        </section>
    );
}
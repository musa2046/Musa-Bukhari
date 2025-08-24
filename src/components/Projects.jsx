import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import projectsArr from "../projectsArr.js"

export default function Projects() {
    return (
        <section className="projects container ">
                <SectionHeading heading = "Projects" seeMoreLink = {"/MyProjects#moreProjects"}/>
            <div className=" row row-cols-1 row-cols-md-2 justify-content-center gap-5 py-4">
                 
                 <ProjectCard
                  heading="Keeper App"
                  description="A React-based note-taking app with a clean UI, dynamic card layout, and Material-UI integration for organizing and managing tasks efficiently"
                  imgURL = "src/assets/project-pics/Keeper-App-project.png"
                  previewLink="https://github.com/musa2046/Netflix-clone"
                  repoLink="https://github.com/musa2046/Keeper-App"/>
                 <ProjectCard heading="Rock Paper Scissor Game"
                  description="An interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript featuring score tracking, autoplay mode, and fun gameplay against the computer."
                  imgURL = "src/assets/project-pics/rock-paper-scissor-project.png"
                  previewLink="https://musa2046.github.io/rock-paper-scissors-game/"
                  repoLink="https://github.com/musa2046/rock-paper-scissors-game" />
            </div>
        </section>
    );
}
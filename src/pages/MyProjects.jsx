import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProgressBar from "../components/ProgressBar";
import projectsArr from "../projectsArr";
import { skills,languages } from "../skillsArr";
import AdditionalSkill from "../components/AdditionalSkill";
import additionalSkillArr from "../additionalSkillArr";
export default function MyProjects(){
    return(
        <>
            <Navbar />
                <section className="projects container my-5">
                    <h2 className="fw-bold " >Projects</h2> 
                    <div className=" row row-cols-1 row-cols-md-2 justify-content-center gap-5 py-4" id="moreProjects">
                    
                        {projectsArr.map(project =>{
                            return <ProjectCard 
                                key = {project.key}
                                heading = {project.heading}
                                imgURL = {project.imgURL}
                                // imgURL =  "src\assets\project-pics\Ecommerce Website project.png"
                                description = {project.description}
                                previewLink = {project.previewLink}
                                repoLink = {project.repoLink}
                            />
                        })}
                    </div>
                </section>
                <section className="container skills" id="moreSkills">
                    <h2 className="fw-bold " >Skills</h2> 
                    <h4 className="my-3 fw-semibold">Web Development</h4>
                    <div className="mx-2">
                        {skills.map((skill)=>{
                            return <ProgressBar
                            name= {skill.name}
                            level={skill.level}
                            width={skill.progress} 
                            key= {skill.key}/>
                        })}
                    </div>
                </section>    
                <section className="container skills"> 
                    <h4 className="my-3 fw-semibold">Programming Languages</h4>
                    <div className="mx-2">
                        {languages.map((language)=>{
                            return <ProgressBar
                            name= {language.name}
                            level={language.level}
                            width={language.progress}
                            key= {language.key}/> 
                        })}
                    </div>

                    <h2 className="fw-bold " >Additional Skills and Technologies</h2> 
                    <div className="container row row-cols-md-3 gx-5 ">
                        {additionalSkillArr.map((additionalSkill)=>{
                            return <AdditionalSkill 
                            key = {additionalSkill.key}
                            skillName = {additionalSkill.skillName}
                            />
                        })}
                        
                    </div>
                </section>    
            
            <Footer />
        </>
    )
}
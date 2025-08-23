import SectionHeading from "./SectionHeading"
import ProgressBar from "./ProgressBar"
export default function Skills(){
    return(
        <>
            <section className="container skills">
                <SectionHeading heading ="Skills" seeMoreLink = {"/MyProjects#moreSkills"} /> 
                <h4 className="my-3 fw-semibold">Web Development</h4>
                <div className="mx-2">
                    <ProgressBar name="HTML" level="Advance" width="100" />
                    <ProgressBar name="CSS" level="Advance" width="100" />
                    <ProgressBar name="BootStrap" level="Advance" width="100" />
                    <ProgressBar name="JavaScript" level="Proficient" width="75" />
                    <ProgressBar name="REACT" level="Proficient" width="75" />
                    
                </div>
            </section>
        </>
    )
} 
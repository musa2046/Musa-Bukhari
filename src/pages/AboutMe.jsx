import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AboutMe(){
    return(
        <>
            <Navbar /> 
            <div className="container px-0 px-lg-5">
                <div className="my-5 py-3">
                    <h2 className="text-center text-lg-start gradient-text fw-bold">About me</h2>
                    <p className="fs-5 px-2 px-lg-0 text-center about-me-para" >Motivated Computer Science student passionate about front-end development and modern web technologies.Skilled in building responsive interfaces with HTML, CSS, JavaScript, Bootstrap, and React.js.Beyond coding, I thrive in community building, mentoring, and event management, always eager to learn and grow while helping others do the same.</p>
                </div>
                <div className="">
                <h2 className="text-center text-lg-start gradient-text fw-bold">Experiences</h2>
                    <div className="px-lg-5 px-0 fs-5 about-me-div" style={{fontFamily:"Hind"}}>
                        
                        <div className="my-5 ms-2">
                            <p className="fw-bold">Front-End Web Developer Intern</p>
                            <p>Tech Tycoons</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0"  >
                                <li>Built multiple projects using React-Bootstrap and Material UI (Keeper App, To-Do List, Portfolio).</li>
                                <li>Gained hands-on experience in creating responsive and user-friendly designs.</li>
                                
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Coordinator - UOP Chapter</p>
                            <p>Human Care Foundation</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0">
                                <li>Led a Ramzan Dastarkhwan donation drive to provide meals to underprivileged communities.</li>
                                <li>Organized student-focused seminars to encourage learning and collaboration.</li>
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Technical Lead</p>
                            <p>Arfa Karim Tech Incubator, Peshawar</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                                <li>Guided early initiatives and coordinated team activities for student projects.</li>
                                <li>Organized an online panel discussion linking students with industry professionals.</li>
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Social Media Team Lead</p>
                            <p>Tech Tycoons </p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                                <li>Managed social media presence and created engaging content for a student-led tech community.</li>
                                <li>Supported study circles and peer-learning sessions for skill development.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="my-5 py-3 fs-5">
                    <h2 className="text-center text-lg-start gradient-text fw-bold">Volunteer Work and Activities</h2>
                    <div className="my-5 ms-2">
                        <p className="fw-bold">Ration Distribution Drive</p>
                        <p>The Youth Foundation </p>
                        <ul className="ps-4 pe-0 px-lg-5 fs-5 ms-4 me-0" >
                            <li>Collected donations and distributed ration to underprivileged families.</li>   
                        </ul>
                    </div>
                    <div className="my-5 ms-2">
                        <p className="fw-bold">Ramzan Dastarkhwan</p>
                        <p>Human Care Foundation </p>
                        <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                            <li>Helped organize and distribute food during Ramadan.</li>   
                        </ul>
                    </div>

                    <div className="my-5 ms-2">
                        <p className="fw-bold">Event Management</p>
                        <p>Future Leaders Expo 2024 </p>
                        <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                            <li> Managed event logistics as avolunteer.</li>   
                        </ul>
                    </div>
                    <div className="my-5 ms-2">
                        <p className="fw-bold">Ambassador</p>
                        <p>EWH Program, The Youth Foundation </p>
                        <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                            <li>Raised monthly donations to help unemployed individuals start small businesses.</li>   
                        </ul>
                    </div>
                </div>
            </div>  
            <Footer />
        </>
    )
}
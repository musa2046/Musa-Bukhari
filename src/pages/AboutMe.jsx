import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AboutMe(){
    return(
        <>
            <Navbar /> 
            <div className="container px-0 px-lg-5">
                <div className="my-5 py-3">
                    <h2 className="text-center text-lg-start">About me</h2>
                    <p className="fs-5 px-2 px-lg-0 about-me-para" >Motivated Computer Science student with a strong interest in front-end development and modern web technologies. Skilled in building responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js. Experienced in community building, event management, and social media strategy through active roles in Tech Tycoons and other student-led organizations. Strong leadership and teamwork abilities demonstrated through mentoring peers and managing technical projects. Seeking to apply technical expertise and creative problem-solving in an internship or junior developer role.</p>
                </div>
                <div className="">
                <h2 className="text-center text-lg-start">Experiences</h2>
                    <div className="px-lg-5 px-0 fs-5 about-me-div" style={{fontFamily:"Hind"}}>
                        
                        <div className="my-5 ms-2">
                            <p className="fw-bold">Front-End Web Developer Intern</p>
                            <p>Tech Tycoons</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0"  >
                                <li>Gained hands-on experience with React Bootstrap and Material UI by implementing them in projects.</li>
                                <li>Built multiple projects with React-Bootstrap and Material UI, including a Keeper App, To-Do List App, and Personal Portfolio, to strengthen my front-end development skills.</li>
                                
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Coordinator - UOP Chapter</p>
                            <p>Human Care Foundation</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0">
                                <li>Led a Ramzan Dastarkhwan donation drive, providing iftar meals to underprivileged communities.</li>
                                <li>Organized multiple student-focused seminars to promote learning and community engagement.</li>
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Technical Lead</p>
                            <p>Arfa Karim Tech Incubator, Peshawar</p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                                <li>Guided early initiatives and coordinated team efforts to support student-focused activities.</li>
                                <li>Organized an online panel discussion connecting students with industry professionals to bridge academia and the tech market.</li>
                            </ul>
                        </div>

                        <div className="my-5 ms-2">
                            <p className="fw-bold">Social Media Team Lead</p>
                            <p>Tech Tycoons </p>
                            <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                                <li>Contributed to building a student-led tech community by managing social media presence and creating engaging content.</li>
                                <li>Organized and supported study circles and learning sessions to help Computer Science students grow their skills collaboratively.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="my-5 py-3 fs-5">
                    <h2 className="text-center text-lg-start">Volunteer Work and Activities</h2>
                    <div className="my-5 ms-2">
                        <p className="fw-bold">Ration Distribution Drive</p>
                        <p>The Youth Foundation </p>
                        <ul className="ps-4 pe-0 px-lg-5 fs-5 ms-4 me-0" >
                            <li>Collected donations & provided ration to underprivileged families.</li>   
                        </ul>
                    </div>
                    <div className="my-5 ms-2">
                        <p className="fw-bold">Ramzan Dastarkhwan</p>
                        <p>Human Care Foundation </p>
                        <ul className="ps-4 pe-1 px-lg-5 fs-5 ms-4 me-0" >
                            <li>Helped organize & distribute food during Ramadan.</li>   
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
                            <li>Raised PKR 100/month from donors to support unemployed individuals in starting small businesses for their families.</li>   
                        </ul>
                    </div>
                </div>
            </div>  
            <Footer />
        </>
    )
}
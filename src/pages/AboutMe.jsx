import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AboutMe(){
    return(
        <>
            <Navbar /> 
            <div className="container px-5">
                <div className="my-5 py-3">
                    <h2>About me</h2>
                    <p className="fs-5  px-5" style={{fontFamily:"Hind", lineHeight : "45px"}}>Motivated Computer Science student with a strong interest in front-end development and modern web technologies. Skilled in building responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, and React.js. Experienced in community building, event management, and social media strategy through active roles in Tech Tycoons and other student-led organizations. Strong leadership and teamwork abilities demonstrated through mentoring peers and managing technical projects. Seeking to apply technical expertise and creative problem-solving in an internship or junior developer role.</p>
                </div>
                <div className="">
                <h2>Experiences</h2>
                    <div className="px-5 fs-5" style={{fontFamily:"Hind"}}>
                        
                        <div className="my-5">
                            <p className="fw-bold">Front-End Web Developer Intern</p>
                            <p>Tech Tycoons</p>
                            <ul className="mx-4" style={{lineHeight:"45px"}} >
                                <li>Developed responsive user interfaces using React.js and Next.js.</li>
                                <li>Collaborated with back-end developers to integrate APIs and enhance website functionality.</li>
                                <li>Participated in code reviews and contributed to improving code quality.</li>
                            </ul>
                        </div>

                        <div className="my-5">
                            <p className="fw-bold">Coordinator - UOP Chapter</p>
                            <p>Human Care Foundation</p>
                            <ul className="mx-4" style={{ lineHeight : "45px"}}>
                                <li>Managed and organized educational initiatives and programs.</li>
                                <li>Coordinated with team members to develop engaging learning materials.</li>
                            </ul>
                        </div>

                        <div className="my-5">
                            <p className="fw-bold">Technical Lead</p>
                            <p>Arfa Karim Tech Incubator, Peshawar</p>
                            <ul className="mx-4" style={{ lineHeight : "45px"}}>
                                <li>Assisted in event organization and presentations</li>
                                <li>Supported multiple events by facilitating logistics and participant engagement.</li>
                            </ul>
                        </div>

                        <div className="my-5">
                            <p className="fw-bold">Social Media Team Lead</p>
                            <p>Tech Tycoons </p>
                            <ul className="mx-4" style={{ lineHeight : "45px"}}>
                                <li>Led the planning and execution of community tech events.</li>
                                <li>Motivated team members and ensured smooth coordination.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="my-5 py-3 fs-5" style={{fontFamily:"Hind"}}>
                    <div className="my-5">
                        <h2 style={{ lineHeight : "45px"}}>Volunteer Work and Activities</h2>
                        <p className="fw-bold">Ration Distribution Drive</p>
                        <p>The Youth Foundation </p>
                        <ul className="px-5 fs-5 mx-4" style={{fontFamily:"Hind", lineHeight : "45px"}}>
                            <li>Collected donations & provided ration to underprivileged families.</li>   
                        </ul>
                    </div>
                    <div className="my-5">
                        <p className="fw-bold">Ramzan Dastarkhwan</p>
                        <p>Human Care Foundation </p>
                        <ul className="px-5 fs-5 mx-4" style={{fontFamily:"Hind", lineHeight : "45px"}}>
                            <li>Helped organize & distribute food during Ramadan.</li>   
                        </ul>
                    </div>

                    <div className="my-5">
                        <p className="fw-bold">Event Management</p>
                        <p>Future Leaders Expo 2024 </p>
                        <ul className="px-5 fs-5 mx-4" style={{fontFamily:"Hind", lineHeight : "45px"}}>
                            <li> Managed event logistics as avolunteer.</li>   
                        </ul>
                    </div>
                    <div className="my-5">
                        <p className="fw-bold">Ambassador</p>
                        <p>EWH Program, The Youth Foundation </p>
                        <ul className="px-5 fs-5 mx-4" style={{fontFamily:"Hind", lineHeight : "45px"}}>
                            <li>Raised PKR 100/month from donors to support unemployed individuals in starting small businesses for their families.</li>   
                        </ul>
                    </div>
                </div>
            </div>  
            <Footer />
        </>
    )
}
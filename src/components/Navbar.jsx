import Socials from "./Socials"
import { NavLink } from "react-router"
import navLogo from "src/assets/musa_logo_simple.svg"

export default function Navbar(){
    return (
        <>
            <nav className="navbar d-flex justify-content-between align-items-center p-0" style={{maxHeight:"5vh"}} >
                <div className="container-fluid">
                    
                    <a href="#" className="navbar-brand d-flex align-items-center p-0 "><img style={{ height: "3vw", maxHeight: "5vw",minHeight:"40px", width: "auto" }} className="img-fluid " src={navLogo}></img></a>
                
                    <ul className="nav-elements navbar-nav d-flex flex-row justify-content-around gap-5 text-white fw-medium m-0" style={{fontSize :"1.125rem"}}>
                    <li className="nav-item "> <NavLink className="nav-link text-white nav-item-underline "   to="/"><span>Home</span></NavLink></li>
                    <li className="nav-item "> <NavLink className="nav-link text-white nav-item-underline " to="/AboutMe"><span>About Me</span></NavLink></li>
                    <li className="nav-item "> <NavLink className="nav-link text-white nav-item-underline" to="/MyProjects"><span>Projects</span></NavLink></li>
                    </ul>

                    <Socials />
                </div>
            </nav>
        </>
    )
}

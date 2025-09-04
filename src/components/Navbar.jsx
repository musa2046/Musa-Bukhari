
import Socials from "./Socials"
import { NavLink } from "react-router-dom"
import navLogo from "../assets/Untitled.svg"

export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg  p-0" style={{maxHeight:"5vh"}} >
                <div className="container-fluid ">
                    
                    <a href="#" className="navbar-brand d-flex align-items-center p-0 "><img style={{ height: "3vw", maxHeight: "5vw",minHeight:"28px", width: "auto" }} className="img-fluid " alt="logo" src={navLogo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" data-bs-theme="dark">
                        <span className="navbar-toggler-icon " ></span>
                    </button>
                    
                    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header" style={{backgroundColor: "#091833"}}>
                            
                            <button type="button" className="btn-close me-2" data-bs-theme="dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        

                        <div className="offcanvas-body   " style={{backgroundColor: "#091833"}}>

                            <ul className="nav-elements navbar-nav  mx-auto  gap-5 text-white  fw-medium m-0 " style={{fontSize :"1.125rem"}}>
                            <li className="nav-item "  data-bs-dismiss="offcanvas" > <NavLink className="nav-link text-white nav-item-underline "  to="/"><span>Home</span></NavLink></li>
                            <li className="nav-item "  data-bs-dismiss="offcanvas" > <NavLink className="nav-link text-white nav-item-underline "  to="/AboutMe"><span>About Me</span></NavLink></li>
                            <li className="nav-item "  data-bs-dismiss="offcanvas" > <NavLink className="nav-link text-white nav-item-underline"  to="/MyProjects"><span>Projects</span></NavLink></li>
                            <li className="nav-item "  data-bs-dismiss="offcanvas" > <NavLink className="nav-link text-white nav-item-underline"  to="/ContactMe"><span>Contact Me</span></NavLink></li>
                            </ul>
                            
                            <div className="  d-flex justify-content-center mt-5 mt-lg-0"> <Socials /></div>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}






































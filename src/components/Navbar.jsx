import Socials from "./Socials"

export default function Navbar(){
    return (
        <nav className="navbar d-flex justify-content-between align-items-center p-0" style={{maxHeight:"5vh"}} >
        <div className="container-fluid">
            
           <a href="#" className="navbar-brand d-flex align-items-center p-0 "><img style={{ height: "3vw", maxHeight: "5vw",minHeight:"40px", width: "auto" }} className="img-fluid " src="src\assets\musa_logo_simple.svg"></img></a>
        
                <ul className="nav-elements navbar-nav d-flex flex-row justify-content-around gap-5 text-white fw-medium m-0" style={{fontSize :"1.125rem"}}>
                  <li className="nav-item "> <a className="nav-link text-white nav-item-underline " href="Home"><span>Home</span></a></li>
                   <li className="nav-item "> <a className="nav-link text-white nav-item-underline " href="AboutMe"><span>About Me</span></a></li>
                   <li className="nav-item "> <a className="nav-link text-white nav-item-underline" href="MyProjects"><span>Projects</span></a></li>
                </ul>

            <Socials />
        </div>
        </nav>
    )
}
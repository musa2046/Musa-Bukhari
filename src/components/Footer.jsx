import Socials from "./Socials"

export default function Footer (){
    return(
        <>
            <footer>
                <div className="container-fluid">
                    <div className="d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between my-5 py-2 fs-5 fw-medium">
                        <p className="gradient-text">Feel Free to Contact me</p>
                        <p >musabukhari2046@gmail.com</p>
                        <Socials />
                    </div>
                </div>
            </footer>
        </>
    )
}
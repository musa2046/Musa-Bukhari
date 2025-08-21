import Socials from "./Socials"

export default function Footer (){
    return(
        <>
            <footer>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between my-5 py-2 fs-5 fw-medium">
                        <p className="gradient-text">Free to Contact me</p>
                        <p >musabukhari2046@gmail.com</p>
                        <Socials />
                    </div>
                </div>
            </footer>
        </>
    )
}
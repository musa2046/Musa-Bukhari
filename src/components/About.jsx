export default function About(){
    return(
        <>
            <section className="container"> 
                <h2 className="fw-bold text-center text-lg-start">About me</h2>
                <div className="about-design d-none d-lg-flex mt-4">
                    <div className="about-design-child"></div>
                    <div className="about-design-child"></div>
                    <div className="about-design-child"></div>
                    <div className="about-design-child"></div>
                </div>
                <div className="row row-cols-2 row-cols-lg-4  text-center  fs-5 pt-5" style={{fontFamily: "Hind, serif", fontSize: "19px"}}>
              
                <div className="col"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                <div className="col"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>                  
                <div className="col"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                <div className="col"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                </div>
              
            </section>
        </>
    )
}
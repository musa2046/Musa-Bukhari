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
                <div className="row row-cols-2 row-cols-lg-4  text-start  fs-5 pt-5" style={{fontFamily: "Hind, serif", fontSize: "19px"}}>
              
                <div className="col ps-4 ps-lg-0 aboutme-grid"><p>I’m a Computer Science student passionate about front-end web development and modern technologies.</p></div>
                <div className="col ps-4 ps-lg-0 aboutme-grid"><p>Skilled in building responsive websites using HTML, CSS, JavaScript, Bootstrap, and React.js.</p></div>                  
                <div className="col ps-4 ps-lg-0 aboutme-grid"><p>Experienced in leadership, mentoring peers, and managing technical projects through student communities.</p></div>
                <div className="col ps-4 ps-lg-0 aboutme-grid"><p>Actively engaged in student-led initiatives, focusing on continuous learning and collaborative growth.</p></div>
                </div>
              
            </section>
        </>
    )
}
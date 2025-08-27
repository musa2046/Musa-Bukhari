import GradientButton from "./GradientButton"

export default function Hero() {
    return(
        <section className="hero container">

            <div className="glow-1" ></div>
            <div className="glow-2" ></div>
            <div className="circle-1-border" ><div className="circle-1" ></div></div>
            <div className="circle-2-border" ><div className="circle-2" ></div></div>
            <div className="circle-3-border" ><div className="circle-3" ></div></div>
            <div className="circle-4-border" ><div className="circle-4" ></div></div>
           
           <div className='h-100 d-flex flex-column  justify-content-center align-items-start hero-text'>
            <h1 className='gradient-text fw-bold'>Hello I'm Musa Bukhari,</h1>
            <h1 className='fw-bold'>Front-End Developer</h1>
            
            <p className='text-break fs-4 text-center text-lg-start'>I create responsive, modern web applications <br/>
             using HTML, CSS, JavaScript, Bootstrap, <br/> and
             React,  focusing on performance, user <br/> experience,
              and clean design.</p>
            <GradientButton text= "Download CV" type="button-gradientToColor"   link="/MY CV.pdf"  download = "Musa_CV.pdf"      />   
           </div>
        </section>
    )
}
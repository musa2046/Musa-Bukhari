import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import emailjs from "@emailjs/browser";

import { useRef } from "react"
export default function ContactMe(){
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log("submitted")
    emailjs
      .sendForm(
        "service_b80nd2a",
        "template_u5zk57d",
        form.current,
        "bJ_ev2zMvNrtHviV-"
      )
      .then(
      (result)=>{
        console.log(result.text);
        alert("Messsage ssent successfully");
        form.current.reset()
      },
      (error) =>{
        console.log(error.text);
        alert("something went wrong please try again")
      }
      
      )
    }
    return (
        <>
        {/* public key: bJ_ev2zMvNrtHviV- */}
        <Navbar />
        <div className="container d-flex justify-content-center align-items-center mt-5 py-5">
            <div className="form-border mt-">
                <form ref={form} className="d-block p-5 form fw-semibold" onSubmit={sendEmail} style={{color: 'white'}}>
                    <h1 className="text-center fw-bold">Drop a Message</h1>
                    <div className="mb-3 ">
                        <label for="name" class="form-label ">Name</label>
                        <div className="form-input-border"><input name="name" type="text" class="form-control form-input text-white" id="name" /></div>
                    </div>
                    <div className="mb-3 ">
                        <label for="email" class="form-label ">Email address</label>
                        <div className="form-input-border"><input name="email" type="email" class="form-control form-input text-white" id="email"/></div>
                    </div>
                    <div className="mb-3 ">
                        <label for="textarea" class="form-label " >Write your Message</label>
                        <div className="form-input-border"><textarea name="message" class="form-control form-input text-white" id="textarea" rows=""></textarea></div>
                    </div>
                    <div className="d-flex justify-content-center pt-3"><button type="submit" className="button-style button-gradientToColor btn rounded-pill button-style fw-bold fs-6 fs-md-5"><span>Send</span></button></div>
                    {/* <div className="d-flex justify-content-center pt-3"><GradientButton text= "Send" submit = "submit" type="button-gradientToColor"/></div> */}
                </form>
            </div>
        </div>
        <Footer />
        </>
    )
}
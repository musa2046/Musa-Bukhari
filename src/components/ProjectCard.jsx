import GradientButton from "./GradientButton";

export default function ProjectCard(props){
   return(
    <>
        <div className="card-border card col   rounded-5 m-0 p-0">
            <div className="project-card rounded-5">
                <img className="card-img-top img-fluid card-img-height" src={props.imgURL} ></img>
                
                <div className="card-body p-0 ">
                    <h5 className="card-heading fw-bold text-white my-4  pu-3">{props.heading}</h5>
                    <p className="card-text text-white my-4"  style={{fontSize:"1.125rem"}}>{props.description}</p>
                    <div className="d-flex justify-content-around  ">
                        <GradientButton text="Live Preview"  type="button-gradientToColor" link={props.previewLink} />
                        <GradientButton text="Check On Github" type="button-colorToGradient" link={props.repoLink}/>
                    </div>
                </div>
            </div>
        </div>
    </>
   ) 
} 
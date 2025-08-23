import { HashLink } from "react-router-hash-link"
export default function SectionHeading(props){
    return(
        <>
            <div className="d-flex justify-content-between align-items-start">
                 <h2 className="fw-bold " >{props.heading}</h2> 
                 <HashLink className="text-light d-inline fw-semibold viewmore-shadow p-0" smooth to={props.seeMoreLink}  > view More   </HashLink>  
            </div>
        </>
    )
}
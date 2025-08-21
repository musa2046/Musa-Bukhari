export default function SectionHeading(props){
    return(
        <>
            <div className="d-flex justify-content-between align-items-start">
                 <h2 className="fw-bold " >{props.heading}</h2> 
                 <a className="text-light d-inline fw-semibold viewmore-shadow p-0" href="#"  > view More   </a>  
            </div>
        </>
    )
}
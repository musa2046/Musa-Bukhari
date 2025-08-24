export default function GradientButton(props){
    return(
        <>
            <a href= {props.link} download={props.download} target="_blank" rel="noopener noreferrer" className= {`btn rounded-pill button-style  ${props.type} fw-bold fs-5 `} >
                <span> {props.text}</span>
             </a>
        </>
    )
}

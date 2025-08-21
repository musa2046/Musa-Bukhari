export default function GradientButton(props){
    return(
        <>
<a href="#" className= {`btn rounded-pill button-style  ${props.type} fw-bold fs-5 `} >
     <span> {props.text}</span>
    </a>
        </>
    )
}
// button-gradientToColor    button-colorToGradient
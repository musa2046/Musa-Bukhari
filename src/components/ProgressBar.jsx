export default function ProgressBar(props){
    return(
        <>
            <div className="my-5 py-2">
                <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">{props.name}</h5>
                    <h6 className="fw-semibold">{props.level}</h6>
                </div>
                <div className="progress progress-shadow" style={{backgroundColor: "#091833"}}>
                    <div className={`progress-bar w-${props.width} progress-bar-gradient rounded-pill` }></div>
                </div>
            </div>
        </>
    )
}
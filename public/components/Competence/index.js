function Competence({img, alt, nom}) {
    return (
        <div className="comp">
            <img src={img} className="imageComp" alt={alt}/>
            <p>{nom}</p>
        </div>
    )

}

export default Competence
import { useState } from "react"
import "../../styles/Slideshow.css"

function Slideshow({photoProjet}) {
    const [currentSlide, updateSlide] = useState(0)
    const prevSlide = currentSlide - 1;
    const nextSlide = currentSlide + 1;
    const nonUnique = photoProjet.length > 1
    
    if (currentSlide === photoProjet.length) {
        updateSlide(0)
    }
    if (currentSlide === -1) {
        updateSlide(photoProjet.length - 1)
    }

    return nonUnique? (
        <div className="slideshow">
            <img className="photo" src={photoProjet[currentSlide]} alt="slideshow images"></img>
            <button className="flecheGauche" onClick={() => updateSlide(prevSlide)}> <img src="../../assets/flecheGauche.png" alt="flèche gauche"></img> </button>
            <button className="flecheDroite" onClick={() => updateSlide(nextSlide)}> <img src="../../assets/flecheGauche.png" alt="flèche droite"></img> </button>
            <p className="numero">{currentSlide + 1} / {photoProjet.length} </p>   
        </div>
    ) : (
        <div className="slideshow">
        <img className="photo" src={photoProjet[currentSlide]} alt="slideshow image"/>
        </div>
        )
}

export default Slideshow
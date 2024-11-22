import { motion } from "framer-motion"
import "../../styles/Competence.css"

function Competence({img, alt, nom}) {
    return (
        // <div className="comp">
        //     <img src={img} className="imageComp" alt={alt}/>
        //     <p>{nom}</p>
        // </div>

        <>
        <motion.div className="style" 
        whileHover={{ scale: 1.2 }}
        onHoverStart={event => {}}
        onHoverEnd={event => {}}
        whileTap={{ scale: 0.9 }}
        >
            <div className="comp">
                <div className="image">
                    <img src={img} className="imageComp" alt={alt}/>
                </div>
                <div className="name">
                    <p>{nom}</p>
                </div>
            </div>
        </motion.div>
        </>
    )

}

export default Competence
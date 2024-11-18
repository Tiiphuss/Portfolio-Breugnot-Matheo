import "../../styles/Footer.css"

function Footer() {
    return (
    <>   
        <div id="orgaFooter">
            <div id="infos">
                <ul>
                    <li> <p>Mathéo Breugnot</p> </li>
                    <li> <p>+33 7 71 18 59 63</p> </li>
                    <li> <p>matheo9477@gmail.com</p> </li>
                </ul>
            </div>

            <div id="copyright">
                <p>© 2024 Mathéo BREUGNOT, Tous droits réservés.</p>
            </div>

            <div id="Links">
                <ul>
                    <li> <a href="mailto:matheo9477@gmail.com" target="_blanck"> <img src="../assets/Links/enveloppe.png" alt="enveloppe"/> </a> </li>
                    <li> <a href="https://www.linkedin.com/in/matheobreugnot/" target="_blanck"> <img src="../assets/Links/Linkedin.png" alt="Logo Linkedin"/> </a> </li>
                    <li> <a href="https://github.com/Tiiphuss" target="_blanck"> <img src="../assets/Links/Github.png" alt="Logo Github"/> </a> </li>
                </ul>
            </div>
        </div>
    </>    
    )
}

export default Footer
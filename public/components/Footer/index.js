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
                    <li> <a href="mailto:matheo9477@gmail.com"> <img src="../assets/Links/enveloppe.png"/> </a> </li>
                    <li> <a href="https://www.linkedin.com/in/matheobreugnot/"> <img src="../assets/Links/Linkedin.png"/> </a> </li>
                    <li> <a href="https://github.com/Tiiphuss"> <img src="../assets/Links/Github.png"/> </a> </li>
                </ul>
            </div>
        </div>
    </>    
    )
}

export default Footer
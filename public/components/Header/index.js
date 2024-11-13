import "../../styles/Header.css"

function Header() {
    return (
        <nav>
            <div id="navbar">
                <a href="">Accueil</a>
                <a href="#ancreComp">Compétences</a>
                <a href="#ancreProjets">Projets</a>
                <a href="#orgaFooter">Contact</a>
                <a href="../assets/cvMatheoBreugnot.pdf" target="_blank">Mon CV</a>
            </div>
        </nav>
    )
}

export default Header
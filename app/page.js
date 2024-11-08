import "../public/styles/home.css"
import { Projets } from "../public/datas/projets.js"

export default function Home() {
  return (
    <main>
      <h1 id="titleHome">Matheo Breugnot - Développeur Web</h1>

      <div id="structurePresentation">
        <div id="structurePhoto">
            <img src="../assets/photoHome.jpg" id="photoHome"/>
        </div>

        <p id="presentation">
          Développeur web orienté frontent
          <br/>
          <br/>
          Autonome, passionné et a l'écoute, je transformerais vos idées en sites fonctionnels et stylisés !
          <br/>
          Perfectionniste, je saurais faire correspondre votre vision a votre site afin qu'il vous ressemble.
          <br/>
          <br/>
          Si vous cherchez un developpeur enthousiaste et polyvalent afin de donner vie au site de vos rêves, n'hésitez pas à me contacter !
        </p>
      </div>

      <h2>Mes compétences</h2>
      <div id="competences">
          <div className="comp">
            <img src="../assets/HTML5.png" id="imageHTML" alt="Logo HTML"/>
            <p>HTML</p>
          </div>

          <div className="comp">
            <img src="../assets/CSS.png" id="imageCSS" alt="Logo Css"/>
            <p>CSS</p>
          </div>

          <div className="comp">
            <img src="../assets/JS.png" id="imageJS" alt="Logo JS"/>
            <p>JS</p>
          </div>

          <div className="comp">
            <img src="../assets/React.png" id="imageReact" alt="Logo React"/>
            <p>React</p>
          </div>

          <div className="comp">
            <img src="../assets/NodeJS.png" id="imageNodeJS" alt="Logo NodeJS"/>
            <p>NodeJS</p>
          </div>
      </div>

      <h2>Outils et autre</h2>
      <ul>
        <li>MongoDB</li>
        <li>Git/Github</li>
        <li>API : Authentification JWT, gestion d'erreurs, gestion de fichier utilisateurs</li>
        <li>Optimisation des performances d'un site</li>
        <li>Debug et test de sites</li>
      </ul>

      <h2>Mes Projets</h2>
      <div id="ProjetBooki">
          <h3 id="titreBooki">Booki</h3>
          <img src="../assets/BookiEntier.png" id="PhotoBooki"/>
          <p>Site de recherche de logements et d'activités codé en HTML/CSS (Front uniquement)</p>
          <a href="https://github.com/Tiiphuss/OCP2-Booki" target="_blank">Lien GitHub de Booki</a>
      </div>
    </main>
  );
}

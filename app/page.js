"use client";
import "../public/styles/home.css"
import { Projets } from "../public/datas/projets.js"
import Slideshow from "../public/components/Slideshow"
import Competence from "../public/components/Competence"
import Header from "../public/components/Header"
import Footer from "../public/components/Footer"

export default function Home() {
  return (
    <main>
      <Header/>

      <div id="structurePresentation">
        <h1 id="titleHome">Matheo Breugnot - Développeur Web</h1>
        <div id="structurePhoto">
            <img src="../assets/photoHome.jpg" id="photoHome"/>
        </div>

        <p id="presentation">
          <span>Développeur web orienté Frontent</span>
          <br/>
          <br/>
          Autonome, passionné et a l'écoute, je transformerais vos idées en sites fonctionnels et stylisés !
          <br/>
          Perfectionniste, je saurais faire correspondre votre vision a votre site afin qu'il vous ressemble.
          <br/>
          <br/>
          Si vous cherchez un <span>développeur enthousiaste et polyvalent</span> afin de donner vie au site de vos rêves, n'hésitez pas à me contacter !
        </p>
      </div>

      <h2 id="ancreComp">Mes compétences</h2>
      <div id="competences">
          <Competence img="../assets/Competences/HTML5.png" alt="Logo HTML" nom="HTML"/>
          <Competence img="../assets/Competences/CSS.png" alt="Logo CSS" nom="CSS"/>
          <Competence img="../assets/Competences/JS.PNG" alt="Logo JS" nom="JS"/>
          <Competence img="../assets/Competences/React.png" alt="Logo React" nom="React"/>
          <Competence img="../assets/Competences/NodeJS.png" alt="Logo NodeJS" nom="NodeJS"/>
          <Competence img="../assets/Competences/MongoDB.png" alt="Logo MongoDB" nom="MongoDB"/>
          <Competence img="../assets/Competences/Git.png" alt="Logo Git" nom="Git/Github"/>
      </div>

      
      <div id="projets">
      <h2 id="ancreProjets">Mes Projets</h2>
          {Projets.map((projet) => (
              <div key={projet.title} className="projet">
                  <h3 className="titreProjet">{projet.title}</h3>
                  <Slideshow photoProjet={projet.pictures}/>
                  <p>{projet.description}</p>
                  <a href={projet.link} target="_blank">Lien GitHub de {projet.title}</a>
              </div>
          ))}
      </div>
      <footer>
          <Footer/>
      </footer>
    </main>
  );
}

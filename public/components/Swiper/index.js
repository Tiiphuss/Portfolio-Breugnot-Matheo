import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import '../../styles/Swiper.css'
import 'swiper/css/bundle';
import { Projets } from "../../datas/projets.js"
import Slideshow from "../../components/Slideshow"

function ProjetSwiper() {
    return (
    <Swiper
      className='swiperProjets'
      modules={[Navigation, Pagination, EffectCoverflow]}
      coverflowEffect={{ rotate: 75, slideShadows: false }}
      grabCursor
      effect={"coverflow"}
      longSwipesRatio={0.25}
      centeredSlides
      slidesPerView={"2.2"}
      spaceBetween={200}
      breakpoints={{
        // 2500: {
        //     slidesPerView: "0",
        //     spaceBetween: "10"
        // },
        1200: {
          slidesPerView: "2.2",
          spaceBetween: "200"
        },
        350: {
          slidesPerView: "1"
        },
    }}
      navigation
      pagination={{ clickable: true }}
      keyboard
    >
        {Projets.map((projet) => (
            <SwiperSlide key={projet.title}>
              <div className="projet">
                  <div className='orgaProjet'>
                        <Slideshow photoProjet={projet.pictures}/>
                        <div className='titreLien'>
                            <h3 className="titreProjet">{projet.title}</h3>
                            <div id='lienLogos'>
                                <a href={projet.link} target="_blank" id='lienGithub'> <img src='../assets/GithubLogo.png' alt='Logo Github' className='Logo'/> </a>
                                <a href={projet.figma} target="_blank" id='lienFigma'> <img src='../assets/logoFigma.png' alt='Logo Figma' className='Logo'/> </a>
                                <a href={projet.site} target="_blank" id='lienSite'> <img src='../assets/Site.png' alt='Logo Site' className='Logo'/> </a>
                            </div>
                        </div>
                        <p id='description'>{projet.description}</p>
                  </div>
              </div>
            </SwiperSlide>  
          ))}
    </Swiper>
    )

}

export default ProjetSwiper
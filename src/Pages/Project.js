import { useParams } from "react-router-dom/cjs/react-router-dom.min";

//import components
import NavBar from "../Components/NavBar";
import BodyProject from "../Components/ProjectsCompo/BodyProject";

// import scss
/* import "../Sass/components/_project.scss"; */

//import elements
import Logo from "../img/logo/logo.svg"
import logoReact from "../img/logo/logoReact.jpg"
import logoLaravel from "../img/logo/logoLaravel.png"
import logoHtmlCss from "../img/logo/logoHtmlCss.jpg"

// Declaration variables
const DataProjects = [{ 
    id: '1',
    name: 'Projet React Sass',
    desc: 'Ce projet est un portfolio, fait avec React et Sass. Il a été conçu au cours d\'un exercice durant ma troisième année à l\'IIM.',
    url: 'https://github.com/Djall-Iblis/React_app',
    images: [ logoReact ],
 }, {
    id: '2',
    name: 'Projet Laravel Vue.js',
    desc: 'Ce projet était un exercice que j\'ai fait durant ma deuxième année à l\'IIM. Le but étant de découvrir les bases de Laravel et d\'utiliser Vue.js que nous avions récemment découvert.',
    url: 'url',
    images: [ logoLaravel ],
 }, {
    id: '3',
    name: 'Projet Theme Forest',
    desc: 'Ce projet est un theme html et Css, conçu pour etre publié sur Theme Forest. Il a été conçu au cours d\'un exercice durant ma troisième année à l\'IIM.',
    url: 'https://github.com/Djall-Iblis/Theme_css',
    images: [ logoHtmlCss ],
 }
]

const Project = () => {

    const id = useParams();
    const index = id.slug - 1

        return ( 
            <section id="project">

                <NavBar 
                    title={"Logo"}
                    image={Logo}
                />

                <BodyProject
                    name={DataProjects[index].name}
                    desc={DataProjects[index].desc}
                    url={DataProjects[index].url}
                    images={DataProjects[index].images}
                />

            </section>
        );

    
}

export default Project;
import { Link } from "react-router-dom";

// import components
import NavBar from "../Components/NavBar";
import CardProject from "../Components/ProjectsCompo/CardProject";

// import elements
import Logo from "../img/logo/logo.svg"
import logoReact from "../img/logo/logoReact.jpg"
import logoLaravel from "../img/logo/logoLaravel.png"
import logoHtmlCss from "../img/logo/logoHtmlCss.jpg"

// import scss
import "../Sass/components/_projects.scss";


// declaration variables
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

const Projects = () => {
    return ( 
        <section id="projects">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <h1>Mes Projets</h1>

            <div className="container">
                {
                    DataProjects.map((data, index) => (
                        <div key={index} className="card">
                            <Link className="link" to={`/project/${data.id}`}>
                                <CardProject
                                id={data.id}
                                name={data.name}
                                desc={data.desc}
                                url={data.url}
                                images={data.images}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
            
        </section>
    );
}
 
export default Projects;

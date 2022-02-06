import { Link } from "react-router-dom";

// import components
import NavBar from "../Components/NavBar";
import CardQuizz from "../Components/QuizzCompo/CardQuizz";

// import elements
import Logo from "../img/logo/logo.svg"

// import scss
import "../Sass/components/_quizzs.scss";


// declaration variables
const DataQuizzs = [{ 
    id: '1',
    name: 'League of Legends',
    theme: 'Jeu vidéo',
    level: '2',
 }, {
    id: '2',
    name: 'L\'Epouvanteur',
    theme: 'Litérature',
    level: '2',
 }, {
    id: '3',
    name: 'Star Trek',
    theme: 'Films et Séries',
    level: '2',
 }, {
    id: '4',
    name: 'Naruto',
    theme: 'Animation Japonaise',
    level: '2',
 }
]

const Quizzs = () => {
    return ( 
        <section id="quizzs">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <h1>Mes Quizz</h1>

            <div className="container">
                {
                    DataQuizzs.map((data, index) => (
                        <div key={index} className="card">
                            <Link className="link" to={`/quizz/${data.id}`}>
                                <CardQuizz
                                id={data.id}
                                name={data.name}
                                theme={data.theme}
                                level={data.level}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
            
        </section>
    );
}
 
export default Quizzs;

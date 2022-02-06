// import
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// import components
import NavBar from "../Components/NavBar";
import InterfaceQuizz from "../Components/QuizzCompo/InterfaceQuizz";

// import elements
import Logo from "../img/logo/logo.svg"
import logoReact from "../img/logo/logoReact.jpg"
import logoLaravel from "../img/logo/logoLaravel.png"
import logoHtmlCss from "../img/logo/logoHtmlCss.jpg"

// import scss
import "../Sass/components/quizzCompo/_quizz.scss";


// declaration variables
const DataQuizzs = [{ 
    id: '1',
    name: 'League of Legends',
    theme: 'Jeu vidéo',
    level: '2',
    images: [ logoReact ],
 }, {
    id: '2',
    name: 'L\'Epouvanteur',
    theme: 'Litérature',
    level: '2',
    images: [ logoLaravel ],
 }, {
    id: '3',
    name: 'Star Trek',
    theme: 'Films et Séries',
    level: '2',
    images: [ logoHtmlCss ],
 }, {
    id: '4',
    name: 'Naruto',
    theme: 'Animation Japonaise',
    level: '2',
    images: [ logoHtmlCss ],
 }
]

const BigData = [
    {
        id : '1',
        DataQuizz: [
            { 
            questionText: 'Qui suis je ?',
            answerOptions: [
                { optionText: 'Sébastien', isCorrect: false} , 
                { optionText: 'Richard', isCorrect: false}, 
                { optionText: 'Magueritte', isCorrect: false}, 
                { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Où suis je ?',
                answerOptions: [
                    { optionText: 'Dans mon lit', isCorrect: false} , 
                    { optionText: 'Sur une île deserte', isCorrect: false}, 
                    { optionText: 'Au bord d\'un précipice', isCorrect: false}, 
                    { optionText: 'Dans mon lit, au bord d\'un précipice, sur une île déserte', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }
        ]
    }, {
        id : '2',
        DataQuizz: [
            { 
            questionText: 'Qui suis je ?',
            answerOptions: [
                { optionText: 'Sébastien', isCorrect: false} , 
                { optionText: 'Richard', isCorrect: false}, 
                { optionText: 'Magueritte', isCorrect: false}, 
                { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Où suis je ?',
                answerOptions: [
                    { optionText: 'Dans mon lit', isCorrect: false} , 
                    { optionText: 'Sur une île deserte', isCorrect: false}, 
                    { optionText: 'Au bord d\'un précipice', isCorrect: false}, 
                    { optionText: 'Dans mon lit, au bord d\'un précipice, sur une île déserte', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }
        ]
    }, {
        id : '3',
        DataQuizz: [
            { 
            questionText: 'Qui suis je ?',
            answerOptions: [
                { optionText: 'Sébastien', isCorrect: false} , 
                { optionText: 'Richard', isCorrect: false}, 
                { optionText: 'Magueritte', isCorrect: false}, 
                { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Où suis je ?',
                answerOptions: [
                    { optionText: 'Dans mon lit', isCorrect: false} , 
                    { optionText: 'Sur une île deserte', isCorrect: false}, 
                    { optionText: 'Au bord d\'un précipice', isCorrect: false}, 
                    { optionText: 'Dans mon lit, au bord d\'un précipice, sur une île déserte', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }
        ]
    }, {
        id : '4',
        DataQuizz: [
            { 
            questionText: 'Qui suis je ?',
            answerOptions: [
                { optionText: 'Sébastien', isCorrect: false} , 
                { optionText: 'Richard', isCorrect: false}, 
                { optionText: 'Magueritte', isCorrect: false}, 
                { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Où suis je ?',
                answerOptions: [
                    { optionText: 'Dans mon lit', isCorrect: false} , 
                    { optionText: 'Sur une île deserte', isCorrect: false}, 
                    { optionText: 'Au bord d\'un précipice', isCorrect: false}, 
                    { optionText: 'Dans mon lit, au bord d\'un précipice, sur une île déserte', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }, {
                questionText: 'Avec qui suis je ?',
                answerOptions: [
                    { optionText: 'Personne', isCorrect: false} , 
                    { optionText: 'Les Tenêbres', isCorrect: false}, 
                    { optionText: 'Ma soeur', isCorrect: false}, 
                    { optionText: 'D la réponse D', isCorrect: true}],
            }
        ]
    },
]

const Quizz = () => {

    const id = useParams();

    const idUsed = BigData.filter(item => item.id === id.slug)
    const index = idUsed[0].id - 1

    return ( 
        <section id="quizz">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <InterfaceQuizz 
                dataBase={BigData[index].DataQuizz}
                name={DataQuizzs[index].name}
                theme={DataQuizzs[index].theme}
                level={DataQuizzs[index].level}
                id={DataQuizzs[index].id}
            />
            
        </section>
     );
}
 
export default Quizz;
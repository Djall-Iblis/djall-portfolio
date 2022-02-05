// import
import { useEffect, useState } from "react";

// import components
import NavBar from "../Components/NavBar";

// import elements
import Logo from "../img/logo/logo.svg"

// import scss
//import "../Sass/components/_quizz.scss";


// declaration variables
const DataQuizz = [{ 
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
 }
]

const Quizz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        document.getElementsByClassName('countQuestion')[0].innerHTML = `Question n°: ${currentQuestion + 1}`
    });

    const nextQuestion = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const next = currentQuestion + 1;
        if (next < DataQuizz.length) {
            setCurrentQuestion(next)
        } else {
            setShowScore(true);
        }
        
    }

    return ( 
        <section id="quizz">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <h1>Mes Quizz</h1>

            <div className="questionSection">
                <div className="questionText">{DataQuizz[currentQuestion].questionText}</div>
                <h2 className="countQuestion"></h2>
            </div>

            

            <div className="answerSection">
                {DataQuizz[currentQuestion].answerOptions.map((option, index) => (
                    <button onClick={() => nextQuestion(option.isCorrect)} key={index}>{option.optionText}</button>
                ))}
            </div>

            {
                showScore ? <div className="scoreSection">Voici ton score : {score}/{DataQuizz.length} !</div> : <></>
            }
            
        </section>
     );
}
 
export default Quizz;

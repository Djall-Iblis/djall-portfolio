// import
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import scss
import "../../Sass/components/quizzCompo/_interfaceQuizz.scss"


const InterfaceQuizz = ({dataBase, name, theme, level, id}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [showQuestion, setShowQuestion] = useState(true);
    const [score, setScore] = useState(0);

    const DataUsed = dataBase;
    const displayNone = '';

    useEffect(() => {
        if (showQuestion) {
            document.getElementsByClassName('countQuestion')[0].innerHTML = `Question n°: ${currentQuestion + 1}`
        } else {
            return
        }
        
    });

    const nextQuestion = (isCorrect) => {

        if (isCorrect) {
            setScore(score + 1)
        }
        const next = currentQuestion + 1;
        if (next < DataUsed.length) {
            setCurrentQuestion(next)
        } else {
            setShowScore(true);
            setShowQuestion(false)
        }
    }

    function refreshPage() {
        window.location.reload(false);
      }

    return ( 
        <section id="interfaceQuizz">

            <div className="headerInterface">
                
                <h2>{name}</h2>

                <div>
                    <p>{theme}</p>

                    <span>Niveau : {level}</span>
                </div>

            </div>

            {
                showQuestion ? 
                <div>
                    <div className="questionSection">
                        <h2 className="countQuestion">Question n°: ???</h2>
                        <div className="questionText">{DataUsed[currentQuestion].questionText}</div>
                    </div>

                

                    <div className="answerSection">
                        {DataUsed[currentQuestion].answerOptions.map((option, index) => (
                            <button onClick={() => nextQuestion(option.isCorrect)} key={index}>{option.optionText}</button>
                        ))}
                    </div>
                </div> : <></>
            }
            

            {
                showScore ? 
                <div className="scoreSection">
                    <div>
                        Voici ton score : {score}/{DataUsed.length} !
                    </div>
                    <Link to={`/quizz/${id}`}>
                        <button onClick={() => refreshPage(true)} className="playAgain">Rejouer ?</button>
                    </Link>
                </div> : <></>
            }
            
        </section>
     );
}
 
export default InterfaceQuizz;
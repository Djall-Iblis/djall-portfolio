// import
import { useEffect, useState } from "react";


const InterfaceQuizz = ({dataBase, name, theme, level}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const DataUsed = dataBase;

    useEffect(() => {
        document.getElementsByClassName('countQuestion')[0].innerHTML = `Question n°: ${currentQuestion + 1}`
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
        }
        
    }

    return ( 
        <section id="interfaceQuizz">

            <header>
                <div>
                    <h2>{name}</h2>

                    <span>{level}</span>
                </div>
                
                <p>{theme}</p>

            </header>

            <div className="questionSection">
                <div className="questionText">{DataUsed[currentQuestion].questionText}</div>
                <h2 className="countQuestion"></h2>
            </div>

            

            <div className="answerSection">
                {DataUsed[currentQuestion].answerOptions.map((option, index) => (
                    <button onClick={() => nextQuestion(option.isCorrect)} key={index}>{option.optionText}</button>
                ))}
            </div>

            {
                showScore ? <div className="scoreSection">Voici ton score : {score}/{DataUsed.length} !</div> : <></>
            }
            
        </section>
     );
}
 
export default InterfaceQuizz;
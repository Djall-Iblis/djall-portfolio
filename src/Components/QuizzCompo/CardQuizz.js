//import scss
import "../../Sass/components/quizzCompo/_cardQuizz.scss";


const CardQuizz = ({name, theme, level}) => {
    return ( 
        <section id="cardQuizz">

            <h2>{name}</h2>

            <div>
                <p>{theme}</p>

                 <p> Niveau : {level}</p>
            </div>

        </section>
     );
}

export default CardQuizz;
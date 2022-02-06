//import scss
import "../../Sass/components/quizzCompo/_cardQuizz.scss";


const CardQuizz = ({name, theme, images, level, id}) => {
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
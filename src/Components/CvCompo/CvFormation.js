//import scss
import "../../Sass/components/cvCompo/_cvFormation.scss";


const CvFormation = ({school, years, specialisation}) => {
    return ( 
        <section id="cvFormation">

            <div>
                <h3>{school}</h3>

                <p>{years}</p>
            </div>
            
            <h3>{specialisation}</h3>

            <hr></hr>

        </section>
     );
}

export default CvFormation;
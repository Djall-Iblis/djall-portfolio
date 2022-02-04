//import scss
import "../../Sass/components/cvCompo/_cvExperiences.scss";


const CvExperiences = ({job, entreprise, time, missions}) => {
    return ( 
        <section id="cvExperiences">
            
            <div>
                <h3>{job}</h3>

                <time>{time}</time>
            </div>
            
            <h4>{entreprise}</h4>

            <p>{missions}</p>

        </section>
     );
}

export default CvExperiences;
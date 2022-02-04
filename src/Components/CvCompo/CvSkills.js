//import scss
import "../../Sass/components/cvCompo/_cvSkills.scss";


const CvSkills = ({name, level}) => {
    return ( 
        <section id="cvSkills">
            
            <div>
                <h4>{name}</h4>

                <hr></hr>

                <p>{level}</p>
            </div>

        </section>
     );
}

export default CvSkills;
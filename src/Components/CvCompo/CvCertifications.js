//import scss
import "../../Sass/components/cvCompo/_cvCertifications.scss";


const CvCertifications = ({name, years}) => {
    return ( 
        <section id="cvCertifications">
            
            <div>
                <h3>{name}</h3>

                <p>{years}</p>
            </div>

        </section>
     );
}

export default CvCertifications;
//import scss
import "../../Sass/components/cvCompo/_cvHeader.scss";


const CvHeader = ({photo, firstname, lastname, adress, telephone, email}) => {
    return ( 
        <section id="cvHeader">
            
            <img src={photo} alt={firstname + ' ' + lastname + "'s photo"}/>

            <div>

                <h3>{firstname} {lastname}</h3>
                <h3>{adress}</h3>
                <h3>N° : {telephone}</h3>
                <h3>{email}</h3>

            </div>

        </section>
     );
}

export default CvHeader;